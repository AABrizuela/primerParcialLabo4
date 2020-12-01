import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) {}

  getElements() {
    return this.firestore.collection('actores').ref;
  }

  async getActorPhoto(id: string) {
    return this.fireStorage.storage.ref(`actores/${id}.jpg`).getDownloadURL();
  }

  createElement(targetElement, photo) {
    if (photo) {
      const file = photo;
      const randomId = Math.random().toString(36).substring(2);
      targetElement.foto = randomId;
      const fileRef = this.fireStorage.storage.ref(`actores/${randomId}.jpg`);
      fileRef.put(file);
    } else {
      targetElement.foto = 'placeholder';
    }
    targetElement.isActive = true;
    this.firestore.collection('actores').add(targetElement);
  }

  modifyElement(targetElement, fileToUpload) {
    if (fileToUpload) {
      const file = fileToUpload;
      const randomId = Math.random().toString(36).substring(2);
      targetElement.data.foto = randomId;
      const fileRef = this.fireStorage.storage.ref(`actores/${randomId}.jpg`);
      fileRef.put(file);
    } else {
      targetElement.data.foto = 'placeholder';
    }
    console.log(targetElement);

    this.firestore.collection('actores').doc(targetElement.id).update({
      nombre: targetElement.data.nombre,
      apellido: targetElement.data.apellido,
      fechaDeNacimiento: targetElement.data.fechaDeNacimiento,
      foto: targetElement.data.foto,
      nacionalidad: targetElement.data.nacionalidad,
    });
  }

  deleteElement(targetElement) {
    this.firestore.collection('actores').doc(targetElement).delete();
  }
}
