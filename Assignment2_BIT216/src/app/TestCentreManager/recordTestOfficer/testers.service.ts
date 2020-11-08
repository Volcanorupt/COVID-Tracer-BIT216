import { Tester } from './tester.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class TesterService {

    private testers: Tester[] = [];
    private testersUpdated = new Subject<Tester[]>();

    constructor(private http: HttpClient) { }

    addTester(officerName: string, officerPosition: string, testCentreId: string) {
        const tester: Tester = { id: null, officerName: officerName, officerPosition: officerPosition, testCentreId: testCentreId };
        this.http
            .post<{ message: string, testerId: string }>('http://localhost:3000/api/tester', tester)
            .subscribe((responseData) => {
                const id = responseData.testerId;
                tester.id = id;
                this.testers.push(tester);
                this.testersUpdated.next([...this.testers]);
            });
    }

    getTesters() {
        this.http.get <any> ('http://localhost:3000/api/tester')
            .pipe(map((postData) => {
                return postData.testers.map((tester: { officerName: any; officerPosition: any; testCentreId: any; _id: any; }) => {
                    return {
                        officerName: tester.officerName,
                        officerPosition: tester.officerPosition,
                        testCentreId: tester.testCentreId,
                        id: tester._id
                    };
                });
            }))

            .subscribe((transformedTesters) => {
                this.testers = transformedTesters;
                this.testersUpdated.next([...this.testers]);
            })
    }

    getTestersUpdateListener() {
        return this.testersUpdated.asObservable();
    }

}