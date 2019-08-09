import {Injectable} from "@angular/core";
import {User} from "./user";
import {auth} from "firebase/app";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireDatabase} from "@angular/fire/database";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  userData: any; // Save logged in user uiSchemaData

  constructor(
    public afd: AngularFireDatabase,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
  ) {
    /* Saving user uiSchemaData in localstorage when
     logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);

  }

      // Sign up with email/password

  SignUp = async (email, password) => {

    try {
      const  result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.SetUserData(result.user);
      return result;
    } catch (error) {
      return error;
    }

  }

      // Send email verfificaiton when new user sign up
      sendVerificationMail() {

        return this.afAuth.auth.currentUser.sendEmailVerification()
          .then(() => {
          //  this.router.navigate(["verify-email-address"]);
          });
      }

  // // Reset Forggot password
  // ForgotPassword(passwordResetEmail) {
  //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => {
  //       window.alert("Password reset email sent, check your inbox.");
  //     }).catch((error) => {
  //       window.alert(error)
  //     })
  // }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return (user !== null) ? true : false;
  }
// && user.emailVerified !== false


  // Sign in with Google
  GoogleAuth = async () => {
        try {
          const result = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
          this.SetUserData(result.user);
        } catch (error) {
          window.alert(error);
        }
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }




  // /* Setting up user uiSchemaData when sign in with username/password,
  //  sign up with username/password and sign in with social auth
  //  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {

    const userRef = this.afd.database.ref(`users/${user.uid}`);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName === null ? "" : user.displayName,
      photoURL: user.photoURL === null ? "" : user.photoURL,
      emailVerified: user.emailVerified
    };

    const response = userRef.set(userData);

    // console.log(response);
    return response;
  }
   // const signUpRef  = this.afd.database.ref("signUp");
    // signUpRef.push(userInfo);

    //
    // console.log(db.ref("users/" + user.uid).set({
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //
    // }));


  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate([""]);
    });
  }

  // read Data from Firebase database
  getUsers = () => {

    const userRef = this.afd.database.ref("users/NoWPNhcWEXX5npSgSk3GdGxIdVw2");

    userRef.once("value").then((snapshot) => {
      const  username = snapshot.val() || "Anonymous";
      // console.log(username);
    });
  }

}



