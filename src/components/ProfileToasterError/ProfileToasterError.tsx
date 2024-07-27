import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomProfileToasterError = (props: any) => (
    <div>
        <div className="customCopyToast">
            <img src={'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.8d36733b.ico&w=32&q=75'}
                alt="TobetoIcon" />
            <span>Tobeto</span>
        </div>
        <div className="customCopyToastUrl">
            <span>• {props.name}</span>
        </div>
    </div>
);

const ProfileToasterError = (props: any) => {
    return (
        toast.success(<CustomProfileToasterError name={props.name} />, {
            autoClose: 3000,
            theme: "light",
            position: "top-right",
            hideProgressBar: true,
            icon: false,
            className: "copyToastError",
        })
    );
};

export default ProfileToasterError;
