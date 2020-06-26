import { __decorate } from "tslib";
import { Component } from 'vue-property-decorator';
import SCComponentBase from '@/shared/application/sc-component-base';
let ResetPasswordComponent = class ResetPasswordComponent extends SCComponentBase {
    constructor() {
        super(...arguments);
        this.refs = this.$refs;
        this.resetPasswordInput = {};
        this.errors = [];
        this.isPasswordReset = false;
    }
    onSubmit() {
        if (this.refs.form.validate()) {
            this.resetPasswordInput.token = this.$route.query.token.toString();
            this.scService.post('/api/resetPassword', this.resetPasswordInput)
                .then((response) => {
                if (!response.isError) {
                    this.resultMessage = this.$t('PasswordResetSuccessful').toString();
                    this.isPasswordReset = true;
                }
                else {
                    this.errors = response.errors;
                }
            });
        }
    }
};
ResetPasswordComponent = __decorate([
    Component
], ResetPasswordComponent);
export default ResetPasswordComponent;
//# sourceMappingURL=reset-password.js.map