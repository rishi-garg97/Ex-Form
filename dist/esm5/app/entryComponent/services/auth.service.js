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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9lbnRyeUNvbXBvbmVudC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFNdkM7SUFHRSxxQkFDUyxHQUF3QixFQUN4QixHQUFxQixFQUFJLDJCQUEyQjtJQUNwRCxNQUF1QixFQUFFLCtCQUErQjtJQUN4RCxNQUFjO1FBSnZCLGlCQWlCQztRQWhCUSxRQUFHLEdBQUgsR0FBRyxDQUFxQjtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcUJuQiw4QkFBOEI7UUFFbEMsV0FBTSxHQUFHLFVBQU8sS0FBSyxFQUFFLFFBQVE7Ozs7Ozt3QkFHWCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUE7O3dCQUEvRSxNQUFNLEdBQUcsU0FBc0U7d0JBQ3RGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM5QixzQkFBTyxNQUFNLEVBQUM7Ozt3QkFFZCxzQkFBTyxPQUFLLEVBQUM7Ozs7YUFHaEIsQ0FBQTtRQTBCSCxr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O1NBMUlZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7YXV0aH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gXCJAYW5ndWxhci9maXJlL2F1dGhcIjtcbmltcG9ydCB7QW5ndWxhckZpcmVzdG9yZX0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQge0FuZ3VsYXJGaXJlRGF0YWJhc2V9IGZyb20gXCJAYW5ndWxhci9maXJlL2RhdGFiYXNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICB1c2VyRGF0YTogYW55OyAvLyBTYXZlIGxvZ2dlZCBpbiB1c2VyIHVpU2NoZW1hRGF0YVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhZmQ6IEFuZ3VsYXJGaXJlRGF0YWJhc2UsXG4gICAgcHVibGljIGFmczogQW5ndWxhckZpcmVzdG9yZSwgICAvLyBJbmplY3QgRmlyZXN0b3JlIHNlcnZpY2VcbiAgICBwdWJsaWMgYWZBdXRoOiBBbmd1bGFyRmlyZUF1dGgsIC8vIEluamVjdCBGaXJlYmFzZSBhdXRoIHNlcnZpY2VcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gICAgLyogU2F2aW5nIHVzZXIgdWlTY2hlbWFEYXRhIGluIGxvY2Fsc3RvcmFnZSB3aGVuXG4gICAgIGxvZ2dlZCBpbiBhbmQgc2V0dGluZyB1cCBudWxsIHdoZW4gbG9nZ2VkIG91dCAqL1xuICAgIHRoaXMuYWZBdXRoLmF1dGhTdGF0ZS5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlcjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBudWxsKTtcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2lnbiBpbiB3aXRoIGVtYWlsL3Bhc3N3b3JkXG4gIFNpZ25JbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXG4gIH1cblxuICAgICAgLy8gU2lnbiB1cCB3aXRoIGVtYWlsL3Bhc3N3b3JkXG5cbiAgU2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0ICByZXN1bHQgPSBhd2FpdCB0aGlzLmFmQXV0aC5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgdGhpcy5TZXRVc2VyRGF0YShyZXN1bHQudXNlcik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gIH1cblxuICAgICAgLy8gU2VuZCBlbWFpbCB2ZXJmaWZpY2FpdG9uIHdoZW4gbmV3IHVzZXIgc2lnbiB1cFxuICAgICAgc2VuZFZlcmlmaWNhdGlvbk1haWwoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguY3VycmVudFVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInZlcmlmeS1lbWFpbC1hZGRyZXNzXCJdKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAvLyAvLyBSZXNldCBGb3JnZ290IHBhc3N3b3JkXG4gIC8vIEZvcmdvdFBhc3N3b3JkKHBhc3N3b3JkUmVzZXRFbWFpbCkge1xuICAvLyAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwocGFzc3dvcmRSZXNldEVtYWlsKVxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xuICAvLyAgICAgICB3aW5kb3cuYWxlcnQoXCJQYXNzd29yZCByZXNldCBlbWFpbCBzZW50LCBjaGVjayB5b3VyIGluYm94LlwiKTtcbiAgLy8gICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICB3aW5kb3cuYWxlcnQoZXJyb3IpXG4gIC8vICAgICB9KVxuICAvLyB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIHdoZW4gdXNlciBpcyBsb29nZWQgaW4gYW5kIGVtYWlsIGlzIHZlcmlmaWVkXG4gIGdldCBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgcmV0dXJuICh1c2VyICE9PSBudWxsKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuLy8gJiYgdXNlci5lbWFpbFZlcmlmaWVkICE9PSBmYWxzZVxuXG5cbiAgLy8gU2lnbiBpbiB3aXRoIEdvb2dsZVxuICBHb29nbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBvcHVwKG5ldyBhdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpKTtcbiAgICAgICAgICB0aGlzLlNldFVzZXJEYXRhKHJlc3VsdC51c2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gIH1cblxuICAvLyBBdXRoIGxvZ2ljIHRvIHJ1biBhdXRoIHByb3ZpZGVyc1xuICBBdXRoTG9naW4ocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpO1xuICB9XG5cblxuXG5cbiAgLy8gLyogU2V0dGluZyB1cCB1c2VyIHVpU2NoZW1hRGF0YSB3aGVuIHNpZ24gaW4gd2l0aCB1c2VybmFtZS9wYXNzd29yZCxcbiAgLy8gIHNpZ24gdXAgd2l0aCB1c2VybmFtZS9wYXNzd29yZCBhbmQgc2lnbiBpbiB3aXRoIHNvY2lhbCBhdXRoXG4gIC8vICBwcm92aWRlciBpbiBGaXJlc3RvcmUgZGF0YWJhc2UgdXNpbmcgQW5ndWxhckZpcmVzdG9yZSArIEFuZ3VsYXJGaXJlc3RvcmVEb2N1bWVudCBzZXJ2aWNlICovXG4gIFNldFVzZXJEYXRhKHVzZXIpIHtcblxuICAgIGNvbnN0IHVzZXJSZWYgPSB0aGlzLmFmZC5kYXRhYmFzZS5yZWYoYHVzZXJzLyR7dXNlci51aWR9YCk7XG5cbiAgICBjb25zdCB1c2VyRGF0YTogVXNlciA9IHtcbiAgICAgIHVpZDogdXNlci51aWQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lID09PSBudWxsID8gXCJcIiA6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICBwaG90b1VSTDogdXNlci5waG90b1VSTCA9PT0gbnVsbCA/IFwiXCIgOiB1c2VyLnBob3RvVVJMLFxuICAgICAgZW1haWxWZXJpZmllZDogdXNlci5lbWFpbFZlcmlmaWVkXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gdXNlclJlZi5zZXQodXNlckRhdGEpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICAgLy8gY29uc3Qgc2lnblVwUmVmICA9IHRoaXMuYWZkLmRhdGFiYXNlLnJlZihcInNpZ25VcFwiKTtcbiAgICAvLyBzaWduVXBSZWYucHVzaCh1c2VySW5mbyk7XG5cbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKGRiLnJlZihcInVzZXJzL1wiICsgdXNlci51aWQpLnNldCh7XG4gICAgLy8gICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgLy8gICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgIC8vICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAvL1xuICAgIC8vIH0pKTtcblxuXG4gIC8vIFNpZ24gb3V0XG4gIFNpZ25PdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJlYWQgRGF0YSBmcm9tIEZpcmViYXNlIGRhdGFiYXNlXG4gIGdldFVzZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdXNlclJlZiA9IHRoaXMuYWZkLmRhdGFiYXNlLnJlZihcInVzZXJzL05vV1BOaGNXRVhYNW5wU2dTazNHZEd4SWRWdzJcIik7XG5cbiAgICB1c2VyUmVmLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgIHVzZXJuYW1lID0gc25hcHNob3QudmFsKCkgfHwgXCJBbm9ueW1vdXNcIjtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4iXX0=