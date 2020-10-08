import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) {}

  getElements() {
    return this.firestore.collection('peliculas').ref;
    // .onSnapshot((snapshot) => {
    //    snapshot.docs.map((element: any) => {
    //      this.elements.push({
    //        id: element.id,
    //        data: element.data(),
    //      });
    //    });
    // });
  }

  borrarElemento(targetElement) {
    this.firestore
      .collection('peliculas')
      .doc(targetElement)
      .update({ isActive: false });
  }

  modificarElemento(targetElement, archivoParaSubir) {
    if (archivoParaSubir) {
      const file = archivoParaSubir;
      const randomId = Math.random().toString(36).substring(2);
      targetElement.data.foto = randomId;
      const fileRef = this.fireStorage.storage.ref(`peliculas/${randomId}.jpg`);
      fileRef.put(file);
    }

    this.firestore.collection('peliculas').doc(targetElement.id).update({
      nombre: targetElement.data.nombre,
      tipo: targetElement.data.tipo,
      cantidadDePublico: targetElement.data.cantidadPublico,
      fotoDeLaPelicula: targetElement.data.foto,
      fechaDeEstreno: targetElement.data.fechaEstreno,
    });
  }

  createElement(targetElement, photo) {
    if (photo) {
      const file = photo;
      const randomId = Math.random().toString(36).substring(2);
      targetElement.foto = randomId;
      const fileRef = this.fireStorage.storage.ref(`peliculas/${randomId}.jpg`);
      fileRef.put(file);
    } else {
      targetElement.foto = 'placeholdermovie';
    }
    targetElement.isActive = true;
    this.firestore.collection('peliculas').add(targetElement);
  }

  async getMoviePhoto(id: string) {
    return this.fireStorage.storage.ref(`peliculas/${id}.jpg`).getDownloadURL();
  }
}
