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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZW50cnlDb21wb25lbnQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBTXZDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFHdEIsWUFDUyxHQUF3QixFQUN4QixHQUFxQixFQUFJLDJCQUEyQjtJQUNwRCxNQUF1QixFQUFFLCtCQUErQjtJQUN4RCxNQUFjO1FBSGQsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXFCbkIsOEJBQThCO1FBRWxDLFdBQU0sR0FBRyxDQUFPLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUVqQyxJQUFJO2dCQUNGLE1BQU8sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxNQUFNLENBQUM7YUFDZjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dC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Q25CLENBQUM7NkNBTWMsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNiLGVBQWU7UUFDZixNQUFNO0dBUFosV0FBVyxDQTBJdkI7U0ExSVksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHthdXRofSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuaW1wb3J0IHtBbmd1bGFyRmlyZXN0b3JlfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7QW5ndWxhckZpcmVEYXRhYmFzZX0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZGF0YWJhc2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHVzZXJEYXRhOiBhbnk7IC8vIFNhdmUgbG9nZ2VkIGluIHVzZXIgdWlTY2hlbWFEYXRhXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFmZDogQW5ndWxhckZpcmVEYXRhYmFzZSxcbiAgICBwdWJsaWMgYWZzOiBBbmd1bGFyRmlyZXN0b3JlLCAgIC8vIEluamVjdCBGaXJlc3RvcmUgc2VydmljZVxuICAgIHB1YmxpYyBhZkF1dGg6IEFuZ3VsYXJGaXJlQXV0aCwgLy8gSW5qZWN0IEZpcmViYXNlIGF1dGggc2VydmljZVxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICAvKiBTYXZpbmcgdXNlciB1aVNjaGVtYURhdGEgaW4gbG9jYWxzdG9yYWdlIHdoZW5cbiAgICAgbG9nZ2VkIGluIGFuZCBzZXR0aW5nIHVwIG51bGwgd2hlbiBsb2dnZWQgb3V0ICovXG4gICAgdGhpcy5hZkF1dGguYXV0aFN0YXRlLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyRGF0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIG51bGwpO1xuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBTaWduIGluIHdpdGggZW1haWwvcGFzc3dvcmRcbiAgU2lnbkluKGVtYWlsLCBwYXNzd29yZCkge1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XG5cbiAgfVxuXG4gICAgICAvLyBTaWduIHVwIHdpdGggZW1haWwvcGFzc3dvcmRcblxuICBTaWduVXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYWZBdXRoLmF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICB0aGlzLlNldFVzZXJEYXRhKHJlc3VsdC51c2VyKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgfVxuXG4gICAgICAvLyBTZW5kIGVtYWlsIHZlcmZpZmljYWl0b24gd2hlbiBuZXcgdXNlciBzaWduIHVwXG4gICAgICBzZW5kVmVyaWZpY2F0aW9uTWFpbCgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5jdXJyZW50VXNlci5zZW5kRW1haWxWZXJpZmljYXRpb24oKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widmVyaWZ5LWVtYWlsLWFkZHJlc3NcIl0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gIC8vIC8vIFJlc2V0IEZvcmdnb3QgcGFzc3dvcmRcbiAgLy8gRm9yZ290UGFzc3dvcmQocGFzc3dvcmRSZXNldEVtYWlsKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChwYXNzd29yZFJlc2V0RW1haWwpXG4gIC8vICAgICAudGhlbigoKSA9PiB7XG4gIC8vICAgICAgIHdpbmRvdy5hbGVydChcIlBhc3N3b3JkIHJlc2V0IGVtYWlsIHNlbnQsIGNoZWNrIHlvdXIgaW5ib3guXCIpO1xuICAvLyAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIC8vICAgICAgIHdpbmRvdy5hbGVydChlcnJvcilcbiAgLy8gICAgIH0pXG4gIC8vIH1cblxuICAvLyBSZXR1cm5zIHRydWUgd2hlbiB1c2VyIGlzIGxvb2dlZCBpbiBhbmQgZW1haWwgaXMgdmVyaWZpZWRcbiAgZ2V0IGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICByZXR1cm4gKHVzZXIgIT09IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4vLyAmJiB1c2VyLmVtYWlsVmVyaWZpZWQgIT09IGZhbHNlXG5cblxuICAvLyBTaWduIGluIHdpdGggR29vZ2xlXG4gIEdvb2dsZUF1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hZkF1dGguYXV0aC5zaWduSW5XaXRoUG9wdXAobmV3IGF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCkpO1xuICAgICAgICAgIHRoaXMuU2V0VXNlckRhdGEocmVzdWx0LnVzZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHdpbmRvdy5hbGVydChlcnJvcik7XG4gICAgICAgIH1cbiAgfVxuXG4gIC8vIEF1dGggbG9naWMgdG8gcnVuIGF1dGggcHJvdmlkZXJzXG4gIEF1dGhMb2dpbihwcm92aWRlcikge1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XG4gIH1cblxuXG5cblxuICAvLyAvKiBTZXR0aW5nIHVwIHVzZXIgdWlTY2hlbWFEYXRhIHdoZW4gc2lnbiBpbiB3aXRoIHVzZXJuYW1lL3Bhc3N3b3JkLFxuICAvLyAgc2lnbiB1cCB3aXRoIHVzZXJuYW1lL3Bhc3N3b3JkIGFuZCBzaWduIGluIHdpdGggc29jaWFsIGF1dGhcbiAgLy8gIHByb3ZpZGVyIGluIEZpcmVzdG9yZSBkYXRhYmFzZSB1c2luZyBBbmd1bGFyRmlyZXN0b3JlICsgQW5ndWxhckZpcmVzdG9yZURvY3VtZW50IHNlcnZpY2UgKi9cbiAgU2V0VXNlckRhdGEodXNlcikge1xuXG4gICAgY29uc3QgdXNlclJlZiA9IHRoaXMuYWZkLmRhdGFiYXNlLnJlZihgdXNlcnMvJHt1c2VyLnVpZH1gKTtcblxuICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VyID0ge1xuICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUgPT09IG51bGwgPyBcIlwiIDogdXNlci5kaXNwbGF5TmFtZSxcbiAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMID09PSBudWxsID8gXCJcIiA6IHVzZXIucGhvdG9VUkwsXG4gICAgICBlbWFpbFZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWRcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB1c2VyUmVmLnNldCh1c2VyRGF0YSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gICAvLyBjb25zdCBzaWduVXBSZWYgID0gdGhpcy5hZmQuZGF0YWJhc2UucmVmKFwic2lnblVwXCIpO1xuICAgIC8vIHNpZ25VcFJlZi5wdXNoKHVzZXJJbmZvKTtcblxuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coZGIucmVmKFwidXNlcnMvXCIgKyB1c2VyLnVpZCkuc2V0KHtcbiAgICAvLyAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcbiAgICAvLyAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXG4gICAgLy8gICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIC8vXG4gICAgLy8gfSkpO1xuXG5cbiAgLy8gU2lnbiBvdXRcbiAgU2lnbk91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVhZCBEYXRhIGZyb20gRmlyZWJhc2UgZGF0YWJhc2VcbiAgZ2V0VXNlcnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB1c2VyUmVmID0gdGhpcy5hZmQuZGF0YWJhc2UucmVmKFwidXNlcnMvTm9XUE5oY1dFWFg1bnBTZ1NrM0dkR3hJZFZ3MlwiKTtcblxuICAgIHVzZXJSZWYub25jZShcInZhbHVlXCIpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCAgdXNlcm5hbWUgPSBzbmFwc2hvdC52YWwoKSB8fCBcIkFub255bW91c1wiO1xuICAgICAgLy8gY29uc29sZS5sb2codXNlcm5hbWUpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG5cbiJdfQ==