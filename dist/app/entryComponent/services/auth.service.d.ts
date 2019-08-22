import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";
export declare class AuthService {
    afd: AngularFireDatabase;
    afs: AngularFirestore;
    afAuth: AngularFireAuth;
    router: Router;
    userData: any;
    constructor(afd: AngularFireDatabase, afs: AngularFirestore, // Inject Firestore service
    afAuth: AngularFireAuth, // Inject Firebase auth service
    router: Router);
    SignIn(email: any, password: any): Promise<auth.UserCredential>;
    SignUp: (email: any, password: any) => Promise<any>;
    sendVerificationMail(): Promise<void>;
    readonly isLoggedIn: boolean;
    GoogleAuth: () => Promise<void>;
    AuthLogin(provider: any): Promise<auth.UserCredential>;
    SetUserData(user: any): Promise<any>;
    SignOut(): Promise<void>;
    getUsers: () => void;
}
