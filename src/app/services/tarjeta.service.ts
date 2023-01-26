import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  setDoc,
  SnapshotOptions,
  startAfter,
  startAt,
  where,
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { TarjetaCredito } from '../models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private tarjeta$ = new Subject<any>();
  reloadTarjetas$ = new Subject<void>();
  dbRef: CollectionReference<DocumentData>;

  tarjetaConverter = {
    toFirestore: (tarjeta: DocumentData) => {
      return {
        id: tarjeta['id'],
        titular : tarjeta['titular'],
        numeroTarjeta : tarjeta['numeroTarjeta'],
        cvv : tarjeta['cvv'],
        fechaCreacion : tarjeta['fechaCreacion'],
        fechaActualizacion: tarjeta['fechaActualizacion'],
        fechaExpiracion: tarjeta['fechaExpiracion']
      };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): TarjetaCredito => {
      const data = snapshot.data(options);
      const tarjeta: TarjetaCredito = {
        id: data['id'],
        titular : data['titular'],
        numeroTarjeta : data['numeroTarjeta'],
        cvv : data['cvv'],
        fechaCreacion : data['fechaCreacion'],
        fechaActualizacion: data['fechaActualizacion'],
        fechaExpiracion: data['fechaExpiracion']
      };
      return tarjeta;
    }
  }

  constructor(private firestore: Firestore) {
    this.dbRef = collection(this.firestore, 'tarjetas');
  }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    // return this.firestore.collection('tarjetas').add(tarjeta);
    return addDoc(this.dbRef, tarjeta).then((res: DocumentReference<DocumentData>) => {
      const tarjetaRef: DocumentReference<DocumentData> = doc(
        this.firestore,
        `tarjetas/${res.id}`      );
      return setDoc(tarjetaRef, { ...tarjeta, id: res.id });
    });
  }

  async obtenerTarjetas(): Promise<any> {
    // return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
    const data: TarjetaCredito[] = [];
    const queryData = await getDocs(query(this.dbRef, orderBy('fechaCreacion', 'desc')));
    queryData.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const tarjetaDoc = this.tarjetaConverter.fromFirestore(doc, {});
      data.push(tarjetaDoc);
    });
    return data;
  }


  eliminarTarjeta(id: string): Promise<any> {
    // return this.firestore.collection('tarjetas').doc(id).delete();
    console.log('id', id);
    return deleteDoc(doc(this.firestore, 'tarjetas', id));
  }

  editarTarjeta(id: string, tarjeta: any): Promise<any> {
    // return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
    return setDoc(doc(this.firestore, 'tarjetas', id), tarjeta);
  }

  addTarjetaEdit(tarjeta: TarjetaCredito) {
    this.tarjeta$.next(tarjeta);
  }

  getTarjetaEdit(): Observable<TarjetaCredito> {
    return this.tarjeta$.asObservable();
  }
}
