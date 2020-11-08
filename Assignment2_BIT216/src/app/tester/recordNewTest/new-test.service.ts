import { Test } from './new-test.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class TestService {

    private tests: Test[] = [];
    private testsUpdated = new Subject<Test[]>();

    constructor(private http: HttpClient) { }

    addTest(patientName: string, patientType: string, patientSymptoms: string, testDate: string) {
        const test: Test = { id: null, patientName: patientName, patientType: patientType, patientSymptoms: patientSymptoms, testDate: testDate };
        this.http
            .post<{ message: string, testId: string }>('http://localhost:3000/api/test', test)
            .subscribe((responseData) => {
                const id = responseData.testId;
                test.id = id;
                this.tests.push(test);
                this.testsUpdated.next([...this.tests]);
            });
    }

    getTests() {
        this.http.get<any>('http://localhost:3000/api/test')
            .pipe(map((postData) => {
                return postData.tests.map((test: { patientName: any; patientType: any; patientSymptoms: any; testDate: any; _id: any; }) => {
                    return {
                        patientName: test.patientName,
                        patientType: test.patientType,
                        patientSymptoms: test.patientSymptoms,
                        testDate: test.testDate,
                        id: test._id
                    };
                });
            }))

            .subscribe((transformedTests) => {
                this.tests = transformedTests;
                this.testsUpdated.next([...this.tests]);
            })
    }

    getTestsUpdateListener() {
        return this.testsUpdated.asObservable();
    }
}