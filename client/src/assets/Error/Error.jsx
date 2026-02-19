import './error.css';

export default function Error(){
    return(
        <div className="errorContainer">
                <img className="errorImage" src="https://res.cloudinary.com/dvutcekav/image/upload/v1771006889/Gemini_Generated_Image_ia2prcia2prcia2p_ihwwno.jpg" alt="Placeholder" />
                <h1 className="errorTitle">404 - Page Not Found</h1>
                <p className="errorMessage">Failed to load necessary assets.</p>
        </div>
    );
};