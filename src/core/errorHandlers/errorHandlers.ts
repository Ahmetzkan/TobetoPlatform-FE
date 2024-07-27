import { toast } from 'react-toastify'
import { AUTH_ERROR, BUSINESS_ERROR, VALIDATION_ERROR } from "./errorTypes";
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import { SERVER_CANNOT_REACHED } from '../../environment/messages';

export const handleError = (error: any) => {
    if (error.code && error.code == "ERR_NETWORK") {
        ProfileToaster({ name: SERVER_CANNOT_REACHED });

    }

    if (error.response && error.response.data && error.response.data.type) {
        let type = error.response.data.type;
        switch (type) {
            case BUSINESS_ERROR:
                handleBusinessError(error.response.data);
                break;
            case VALIDATION_ERROR:
                handleValidationError(error.response.data);
                break;
            case AUTH_ERROR:
                handleAuthError(error.response.data);
                break;
            default:
                 handleDefault(error);
                break;
        }
    }
};

export const handleBusinessError = (error: any) => {
    toast.error(error.detail);
};
export const handleValidationError = (error: any) => {
    Object.keys(error.errors).forEach(key => {
        ProfileToaster(`${key}: ${error.errors[key]}`);
    });
};
export const handleAuthError = (error: any) => {
    ProfileToaster({ name: error.detail });
}
export const handleDefault = (error: any) => {
    toast.error("Bilinmedik hata...");
    console.log("Bilinmedik hata..");
};