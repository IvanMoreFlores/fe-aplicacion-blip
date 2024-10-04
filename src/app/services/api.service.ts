import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://44.213.46.131:3000'; // URL de tu API

  constructor(
    private http: HttpClient
  ) {

  }

  // Método para validar token de usuario
  getValidate(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/user/validate', { headers }); // Realiza la solicitud GET con los headers
  }

  // Método para obtener informacion de usuario
  getInformation(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/user/information', { headers }); // Realiza la solicitud GET con los headers
  }

  // Metodo para registrar usuario
  postRegister(
    usu_numdoc: string,
    tdo_id: number,
    usu_apepat: string,
    usu_nombre: string,
    usu_nrotel: string,
    usu_contra: string,
    tac_id: number,
    tge_id: number,
    usuc_fecnac: string,
    token: string
  ) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    const body = {
      usu_numdoc: usu_numdoc,
      tdo_id: tdo_id,
      usu_apepat: usu_apepat,
      usu_apemat: " ",
      usu_nombre: usu_nombre,
      usu_direcc: "pendiente direccion",
      usu_nrotel: usu_nrotel,
      usu_correo: "pendiente@blip.com",
      usu_contra: usu_contra,
      tac_id: tac_id,
      tge_id: tge_id,
      usuc_fecnac: usuc_fecnac
    };

    return this.http.post(this.apiUrl + '/user/register/host', body, { headers });

  }

  getReservations(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/reserve/host', { headers });
  }


  // Enviar imágenes al servidor
  sendDniFiles(token: string, frontImage: any, backImage: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const formData = new FormData();

    // Agregar las dos imágenes al FormData con los nombres 'front' y 'back'
    formData.append('front', frontImage);
    formData.append('back', backImage);

    // Hacer la petición POST
    return this.http.post(this.apiUrl + '/user/upload/document-confirmation', formData, { headers });
  }

  getAdvertiseConfig(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Añadir el Bearer Token
    });

    return this.http.get(this.apiUrl + '/advertisement/create/configurations', { headers });
  }

  createAdvertisement(
    token: string,
    file1: any,
    file2: any,
    file3: any,
    tga_id: string,
    gar_descri: string,
    gar_largo: string,
    gar_ancho: string,
    gar_alto: string,
    uga_direcc: string,
    uga_lat: string,
    uga_long: string,
    dis_id: string,
    services: any[],
    tve_ids: any[]
  ) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const formData = new FormData();
    const files = [file1, file2, file3];
    files.forEach((file, index) => {
      formData.append('files', file[0]);
    });

    formData.append('tga_id', tga_id);
    formData.append('gar_descri', gar_descri);
    formData.append('gar_largo', gar_largo);
    formData.append('gar_ancho', gar_ancho);
    formData.append('gar_alto', gar_alto);
    formData.append('uga_direcc', uga_direcc);
    formData.append('uga_lat', uga_lat);
    formData.append('uga_long', uga_long);
    formData.append('dis_id', dis_id);

    services.forEach((service: string) => {
      formData.append('services', service.trim());
    });

    tve_ids.forEach((tve_id: string) => {
      formData.append('tve_id', tve_id.trim());
    });

    console.log(formData);

    return this.http.post(this.apiUrl + '/advertisement/create', formData, { headers });
  }

  getAds(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl + '/advertisement/host', { headers });
  }

  deleteAd(token: string, id: string): Observable<any> {
    // Definir los headers con el Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(this.apiUrl + '/advertisement/' + id, { headers });
  }

  updateAd(token: string, formData: FormData) {

    // Configura los headers con el Bearer Token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch(this.apiUrl + '/advertisement/update', formData, { headers });
  }

  updateUser(token: string, formData: FormData) {

    // Configura los headers con el Bearer Token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch(this.apiUrl + '/user', formData, { headers });
  }

  getCalendar(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl + '/advertisement/calender', { headers });
  }

  updateReserve(token: string, res_id: string, rst_id: string) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch(this.apiUrl + '/reserve/' + res_id + '/status/' + rst_id, {}, { headers });
  }

  getBanks(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl + '/user/host/paid/information', { headers });
  }

  updatePaymentMethod(token: string, data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch(this.apiUrl + '/user/host/paid/account', data, { headers });
  }

  getPayments(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl + '/advertisement/paid', { headers });
  }

  reqPayment(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(this.apiUrl + '/user/host/paid/request', null, { headers });
  }

  getDeposit(token: string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl + '/user/host/paid', { headers });
  }

}
