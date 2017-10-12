// service phai co cai nay !importants
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl: string = "http://59c29be588c2c400118df056.mockapi.io/api/api/";
    constructor(
        private _http: Http,
    ) { }
    GetList(): Observable<any[]> {
        // this._http.get(this.apiUrl).map((response:Response) => {
        //     return response.json();
        // })
        // cach khac
        return this._http.get(this.apiUrl).map((response: Response) => response.json());
    }
    GetSingle(id: number): Observable<any> {
        return this._http.get(this.apiUrl + id).map((response: Response) => response.json());
    }

    // Hàm update dữ liệu lên http - chỉnh sửa dữ liệu
    Update(id: number, data: any): Observable<any> {
        return this._http.put(this.apiUrl + id, data).map((response: Response) => response.json());
    }
    // Hàm thêm mới dữ liệu vào http
    Add(data: any): Observable<any> {
        return this._http.post(this.apiUrl, data).map((response: Response) => response.json());
    }
}