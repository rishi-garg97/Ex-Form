/**
 * Created by rgarg on 08-07-2019.
 */
import { Validators } from "@angular/forms";
export class MaxValueValidator {
    constructor() {
        this.get = (maxValue) => {
            return Validators.max(maxValue);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LXZhbHVlLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vdmFsaWRhdG9ycy9tYXgtdmFsdWUtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUI7UUFFQSxRQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBO0lBSEQsQ0FBQztDQUlGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgcmdhcmcgb24gMDgtMDctMjAxOS5cclxuICovXHJcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmV4cG9ydCBjbGFzcyBNYXhWYWx1ZVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG4gIGdldCA9IChtYXhWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIFZhbGlkYXRvcnMubWF4KG1heFZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19