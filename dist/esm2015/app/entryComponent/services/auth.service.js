import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/database";
import * as i2 from "@angular/fire/firestore";
import * as i3 from "@angular/fire/auth";
import * as i4 from "@angular/router";
let AuthService = class AuthService {
    constructor(afd, afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router) {
        this.afd = afd;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        // Sign up with email/password
        this.SignUp = (email, password) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                this.SetUserData(result.user);
                return result;
            }
            catch (error) {
                return error;
            }
        });
        // && user.emailVerified !== false
        // Sign in with Google
        this.GoogleAuth = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
                this.SetUserData(result.user);
            }
            catch (error) {
                window.alert(error);
            }
        });
        // read Data from Firebase database
        this.getUsers = () => {
            const userRef = this.afd.database.ref("users/NoWPNhcWEXX5npSgSk3GdGxIdVw2");
            userRef.once("value").then((snapshot) => {
                const username = snapshot.val() || "Anonymous";
                // console.log(username);
            });
        };
        /* Saving user uiSchemaData in localstorage when
         logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
            }
            else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
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
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem("user"));
        return (user !== null) ? true : false;
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
        const userData = {
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
};
AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.AngularFireDatabase), i0.ɵɵinject(i2.AngularFirestore), i0.ɵɵinject(i3.AngularFireAuth), i0.ɵɵinject(i4.Router)); }, token: AuthService, providedIn: "root" });
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
        AngularFirestore,
        AngularFireAuth,
        Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9lbnRyeUNvbXBvbmVudC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFNdkMsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUd0QixZQUNTLEdBQXdCLEVBQ3hCLEdBQXFCLEVBQUksMkJBQTJCO0lBQ3BELE1BQXVCLEVBQUUsK0JBQStCO0lBQ3hELE1BQWM7UUFIZCxRQUFHLEdBQUgsR0FBRyxDQUFxQjtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcUJuQiw4QkFBOEI7UUFFbEMsV0FBTSxHQUFHLENBQU8sS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBRWpDLElBQUk7Z0JBQ0YsTUFBTyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JB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bkIsQ0FBQzs2Q0FNYyxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2IsZUFBZTtRQUNmLE1BQU07R0FQWixXQUFXLENBMEl2QjtTQTFJWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQge2F1dGh9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoXCI7XG5pbXBvcnQge0FuZ3VsYXJGaXJlc3RvcmV9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHtBbmd1bGFyRmlyZURhdGFiYXNlfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgdXNlckRhdGE6IGFueTsgLy8gU2F2ZSBsb2dnZWQgaW4gdXNlciB1aVNjaGVtYURhdGFcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWZkOiBBbmd1bGFyRmlyZURhdGFiYXNlLFxuICAgIHB1YmxpYyBhZnM6IEFuZ3VsYXJGaXJlc3RvcmUsICAgLy8gSW5qZWN0IEZpcmVzdG9yZSBzZXJ2aWNlXG4gICAgcHVibGljIGFmQXV0aDogQW5ndWxhckZpcmVBdXRoLCAvLyBJbmplY3QgRmlyZWJhc2UgYXV0aCBzZXJ2aWNlXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIC8qIFNhdmluZyB1c2VyIHVpU2NoZW1hRGF0YSBpbiBsb2NhbHN0b3JhZ2Ugd2hlblxuICAgICBsb2dnZWQgaW4gYW5kIHNldHRpbmcgdXAgbnVsbCB3aGVuIGxvZ2dlZCBvdXQgKi9cbiAgICB0aGlzLmFmQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJEYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgbnVsbCk7XG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNpZ24gaW4gd2l0aCBlbWFpbC9wYXNzd29yZFxuICBTaWduSW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcblxuICB9XG5cbiAgICAgIC8vIFNpZ24gdXAgd2l0aCBlbWFpbC9wYXNzd29yZFxuXG4gIFNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hZkF1dGguYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgIHRoaXMuU2V0VXNlckRhdGEocmVzdWx0LnVzZXIpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICB9XG5cbiAgICAgIC8vIFNlbmQgZW1haWwgdmVyZmlmaWNhaXRvbiB3aGVuIG5ldyB1c2VyIHNpZ24gdXBcbiAgICAgIHNlbmRWZXJpZmljYXRpb25NYWlsKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ2ZXJpZnktZW1haWwtYWRkcmVzc1wiXSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgLy8gLy8gUmVzZXQgRm9yZ2dvdCBwYXNzd29yZFxuICAvLyBGb3Jnb3RQYXNzd29yZChwYXNzd29yZFJlc2V0RW1haWwpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKHBhc3N3b3JkUmVzZXRFbWFpbClcbiAgLy8gICAgIC50aGVuKCgpID0+IHtcbiAgLy8gICAgICAgd2luZG93LmFsZXJ0KFwiUGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudCwgY2hlY2sgeW91ciBpbmJveC5cIik7XG4gIC8vICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgd2luZG93LmFsZXJ0KGVycm9yKVxuICAvLyAgICAgfSlcbiAgLy8gfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSB3aGVuIHVzZXIgaXMgbG9vZ2VkIGluIGFuZCBlbWFpbCBpcyB2ZXJpZmllZFxuICBnZXQgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIHJldHVybiAodXNlciAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cbi8vICYmIHVzZXIuZW1haWxWZXJpZmllZCAhPT0gZmFsc2VcblxuXG4gIC8vIFNpZ24gaW4gd2l0aCBHb29nbGVcbiAgR29vZ2xlQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhQb3B1cChuZXcgYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKSk7XG4gICAgICAgICAgdGhpcy5TZXRVc2VyRGF0YShyZXN1bHQudXNlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgd2luZG93LmFsZXJ0KGVycm9yKTtcbiAgICAgICAgfVxuICB9XG5cbiAgLy8gQXV0aCBsb2dpYyB0byBydW4gYXV0aCBwcm92aWRlcnNcbiAgQXV0aExvZ2luKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcbiAgfVxuXG5cblxuXG4gIC8vIC8qIFNldHRpbmcgdXAgdXNlciB1aVNjaGVtYURhdGEgd2hlbiBzaWduIGluIHdpdGggdXNlcm5hbWUvcGFzc3dvcmQsXG4gIC8vICBzaWduIHVwIHdpdGggdXNlcm5hbWUvcGFzc3dvcmQgYW5kIHNpZ24gaW4gd2l0aCBzb2NpYWwgYXV0aFxuICAvLyAgcHJvdmlkZXIgaW4gRmlyZXN0b3JlIGRhdGFiYXNlIHVzaW5nIEFuZ3VsYXJGaXJlc3RvcmUgKyBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQgc2VydmljZSAqL1xuICBTZXRVc2VyRGF0YSh1c2VyKSB7XG5cbiAgICBjb25zdCB1c2VyUmVmID0gdGhpcy5hZmQuZGF0YWJhc2UucmVmKGB1c2Vycy8ke3VzZXIudWlkfWApO1xuXG4gICAgY29uc3QgdXNlckRhdGE6IFVzZXIgPSB7XG4gICAgICB1aWQ6IHVzZXIudWlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSA9PT0gbnVsbCA/IFwiXCIgOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwgPT09IG51bGwgPyBcIlwiIDogdXNlci5waG90b1VSTCxcbiAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZFxuICAgIH07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHVzZXJSZWYuc2V0KHVzZXJEYXRhKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAgIC8vIGNvbnN0IHNpZ25VcFJlZiAgPSB0aGlzLmFmZC5kYXRhYmFzZS5yZWYoXCJzaWduVXBcIik7XG4gICAgLy8gc2lnblVwUmVmLnB1c2godXNlckluZm8pO1xuXG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyhkYi5yZWYoXCJ1c2Vycy9cIiArIHVzZXIudWlkKS5zZXQoe1xuICAgIC8vICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxuICAgIC8vICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcbiAgICAvLyAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgLy9cbiAgICAvLyB9KSk7XG5cblxuICAvLyBTaWduIG91dFxuICBTaWduT3V0KCkge1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZWFkIERhdGEgZnJvbSBGaXJlYmFzZSBkYXRhYmFzZVxuICBnZXRVc2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHVzZXJSZWYgPSB0aGlzLmFmZC5kYXRhYmFzZS5yZWYoXCJ1c2Vycy9Ob1dQTmhjV0VYWDVucFNnU2szR2RHeElkVncyXCIpO1xuXG4gICAgdXNlclJlZi5vbmNlKFwidmFsdWVcIikudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0ICB1c2VybmFtZSA9IHNuYXBzaG90LnZhbCgpIHx8IFwiQW5vbnltb3VzXCI7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VybmFtZSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cblxuIl19