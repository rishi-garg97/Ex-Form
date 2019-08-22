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
var AuthService = /** @class */ (function () {
    function AuthService(afd, afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router) {
        var _this = this;
        this.afd = afd;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        // Sign up with email/password
        this.SignUp = function (email, password) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var result, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        this.SetUserData(result.user);
                        return [2 /*return*/, result];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // && user.emailVerified !== false
        // Sign in with Google
        this.GoogleAuth = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var result, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())];
                    case 1:
                        result = _a.sent();
                        this.SetUserData(result.user);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        window.alert(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // read Data from Firebase database
        this.getUsers = function () {
            var userRef = _this.afd.database.ref("users/NoWPNhcWEXX5npSgSk3GdGxIdVw2");
            userRef.once("value").then(function (snapshot) {
                var username = snapshot.val() || "Anonymous";
                // console.log(username);
            });
        };
        /* Saving user uiSchemaData in localstorage when
         logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem("user", JSON.stringify(_this.userData));
            }
            else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.sendVerificationMail = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            //  this.router.navigate(["verify-email-address"]);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
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
        get: function () {
            var user = JSON.parse(localStorage.getItem("user"));
            return (user !== null) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    // /* Setting up user uiSchemaData when sign in with username/password,
    //  sign up with username/password and sign in with social auth
    //  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afd.database.ref("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName === null ? "" : user.displayName,
            photoURL: user.photoURL === null ? "" : user.photoURL,
            emailVerified: user.emailVerified
        };
        var response = userRef.set(userData);
        // console.log(response);
        return response;
    };
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
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem("user");
            _this.router.navigate([""]);
        });
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
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZW50cnlDb21wb25lbnQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBTXZDO0lBR0UscUJBQ1MsR0FBd0IsRUFDeEIsR0FBcUIsRUFBSSwyQkFBMkI7SUFDcEQsTUFBdUIsRUFBRSwrQkFBK0I7SUFDeEQsTUFBYztRQUp2QixpQkFpQkM7UUFoQlEsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXFCbkIsOEJBQThCO1FBRWxDLFdBQU0sR0FBRyxVQUFPLEtBQUssRUFBRSxRQUFROzs7Ozs7d0JBR1gscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFBOzt3QkFBL0UsTUFBTSxHQUFHLFNBQXNFO3dCQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUIsc0JBQU8sTUFBTSxFQUFDOzs7d0JBRWQsc0JBQU8sT0FBSyxFQUFDOzs7O2FBR2hCLENBQUE7UUEwQkgs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QztTQTFJWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQge2F1dGh9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoXCI7XG5pbXBvcnQge0FuZ3VsYXJGaXJlc3RvcmV9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHtBbmd1bGFyRmlyZURhdGFiYXNlfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgdXNlckRhdGE6IGFueTsgLy8gU2F2ZSBsb2dnZWQgaW4gdXNlciB1aVNjaGVtYURhdGFcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWZkOiBBbmd1bGFyRmlyZURhdGFiYXNlLFxuICAgIHB1YmxpYyBhZnM6IEFuZ3VsYXJGaXJlc3RvcmUsICAgLy8gSW5qZWN0IEZpcmVzdG9yZSBzZXJ2aWNlXG4gICAgcHVibGljIGFmQXV0aDogQW5ndWxhckZpcmVBdXRoLCAvLyBJbmplY3QgRmlyZWJhc2UgYXV0aCBzZXJ2aWNlXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIC8qIFNhdmluZyB1c2VyIHVpU2NoZW1hRGF0YSBpbiBsb2NhbHN0b3JhZ2Ugd2hlblxuICAgICBsb2dnZWQgaW4gYW5kIHNldHRpbmcgdXAgbnVsbCB3aGVuIGxvZ2dlZCBvdXQgKi9cbiAgICB0aGlzLmFmQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJEYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgbnVsbCk7XG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNpZ24gaW4gd2l0aCBlbWFpbC9wYXNzd29yZFxuICBTaWduSW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcblxuICB9XG5cbiAgICAgIC8vIFNpZ24gdXAgd2l0aCBlbWFpbC9wYXNzd29yZFxuXG4gIFNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hZkF1dGguYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgIHRoaXMuU2V0VXNlckRhdGEocmVzdWx0LnVzZXIpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICB9XG5cbiAgICAgIC8vIFNlbmQgZW1haWwgdmVyZmlmaWNhaXRvbiB3aGVuIG5ldyB1c2VyIHNpZ24gdXBcbiAgICAgIHNlbmRWZXJpZmljYXRpb25NYWlsKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ2ZXJpZnktZW1haWwtYWRkcmVzc1wiXSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgLy8gLy8gUmVzZXQgRm9yZ2dvdCBwYXNzd29yZFxuICAvLyBGb3Jnb3RQYXNzd29yZChwYXNzd29yZFJlc2V0RW1haWwpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKHBhc3N3b3JkUmVzZXRFbWFpbClcbiAgLy8gICAgIC50aGVuKCgpID0+IHtcbiAgLy8gICAgICAgd2luZG93LmFsZXJ0KFwiUGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudCwgY2hlY2sgeW91ciBpbmJveC5cIik7XG4gIC8vICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgd2luZG93LmFsZXJ0KGVycm9yKVxuICAvLyAgICAgfSlcbiAgLy8gfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSB3aGVuIHVzZXIgaXMgbG9vZ2VkIGluIGFuZCBlbWFpbCBpcyB2ZXJpZmllZFxuICBnZXQgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIHJldHVybiAodXNlciAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cbi8vICYmIHVzZXIuZW1haWxWZXJpZmllZCAhPT0gZmFsc2VcblxuXG4gIC8vIFNpZ24gaW4gd2l0aCBHb29nbGVcbiAgR29vZ2xlQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhQb3B1cChuZXcgYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKSk7XG4gICAgICAgICAgdGhpcy5TZXRVc2VyRGF0YShyZXN1bHQudXNlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgd2luZG93LmFsZXJ0KGVycm9yKTtcbiAgICAgICAgfVxuICB9XG5cbiAgLy8gQXV0aCBsb2dpYyB0byBydW4gYXV0aCBwcm92aWRlcnNcbiAgQXV0aExvZ2luKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcbiAgfVxuXG5cblxuXG4gIC8vIC8qIFNldHRpbmcgdXAgdXNlciB1aVNjaGVtYURhdGEgd2hlbiBzaWduIGluIHdpdGggdXNlcm5hbWUvcGFzc3dvcmQsXG4gIC8vICBzaWduIHVwIHdpdGggdXNlcm5hbWUvcGFzc3dvcmQgYW5kIHNpZ24gaW4gd2l0aCBzb2NpYWwgYXV0aFxuICAvLyAgcHJvdmlkZXIgaW4gRmlyZXN0b3JlIGRhdGFiYXNlIHVzaW5nIEFuZ3VsYXJGaXJlc3RvcmUgKyBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQgc2VydmljZSAqL1xuICBTZXRVc2VyRGF0YSh1c2VyKSB7XG5cbiAgICBjb25zdCB1c2VyUmVmID0gdGhpcy5hZmQuZGF0YWJhc2UucmVmKGB1c2Vycy8ke3VzZXIudWlkfWApO1xuXG4gICAgY29uc3QgdXNlckRhdGE6IFVzZXIgPSB7XG4gICAgICB1aWQ6IHVzZXIudWlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSA9PT0gbnVsbCA/IFwiXCIgOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwgPT09IG51bGwgPyBcIlwiIDogdXNlci5waG90b1VSTCxcbiAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZFxuICAgIH07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHVzZXJSZWYuc2V0KHVzZXJEYXRhKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAgIC8vIGNvbnN0IHNpZ25VcFJlZiAgPSB0aGlzLmFmZC5kYXRhYmFzZS5yZWYoXCJzaWduVXBcIik7XG4gICAgLy8gc2lnblVwUmVmLnB1c2godXNlckluZm8pO1xuXG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyhkYi5yZWYoXCJ1c2Vycy9cIiArIHVzZXIudWlkKS5zZXQoe1xuICAgIC8vICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxuICAgIC8vICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcbiAgICAvLyAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgLy9cbiAgICAvLyB9KSk7XG5cblxuICAvLyBTaWduIG91dFxuICBTaWduT3V0KCkge1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZWFkIERhdGEgZnJvbSBGaXJlYmFzZSBkYXRhYmFzZVxuICBnZXRVc2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHVzZXJSZWYgPSB0aGlzLmFmZC5kYXRhYmFzZS5yZWYoXCJ1c2Vycy9Ob1dQTmhjV0VYWDVucFNnU2szR2RHeElkVncyXCIpO1xuXG4gICAgdXNlclJlZi5vbmNlKFwidmFsdWVcIikudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0ICB1c2VybmFtZSA9IHNuYXBzaG90LnZhbCgpIHx8IFwiQW5vbnltb3VzXCI7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VybmFtZSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cblxuIl19