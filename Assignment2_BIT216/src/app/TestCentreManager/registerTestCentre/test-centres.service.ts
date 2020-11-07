import { Register } from './test-centre.models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class TestCentresService {

    private registers: Register[] = [];
    private registersUpdated = new Subject<Register[]>();

    constructor(private http: HttpClient) { }

    addTestCentre(centreName: string, centreTel: string, centreAdd: string) {
        const register: Register = { id: null, centreName: centreName, centreTel: centreTel, centreAdd: centreAdd };
        this.http
            .post<{ message: string, registerId: string }>('http://localhost:3000/api/test-centres', register)
            .subscribe((responseData) => {
                const id = responseData.registerId;
                register.id = id;
                this.registers.push(register);
                this.registersUpdated.next([...this.registers]);
            });
    }

    getRegisters() {
        this.http.get<{ message: string, registers: any }>('http://localhost:3000/api/test-centres')
            .pipe(map((postData) => {
                return postData.registers.map((register: { centreName: any; centreTel: any; centreAdd: any; _id: any; }) => {
                    return {
                        centreName: register.centreName,
                        centreTel: register.centreTel,
                        centreAdd: register.centreAdd,
                        id: register._id
                    };
                });
            }))

            .subscribe((transformedRegisters) => {
                this.registers = transformedRegisters;
                this.registersUpdated.next([...this.registers]);
            })
    }

    getRegistersUpdateListener() {
        return this.registersUpdated.asObservable();
    }
}