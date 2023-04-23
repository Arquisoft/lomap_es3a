import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";
import "../../src/css/map.css";

interface ImgbbUploaderProps {
    apiKey: string;
    onUploadSuccess: (imageUrl: string) => void;
    onUploadFailure: (error: Error) => void;
}

function ImgbbUploader(props: ImgbbUploaderProps) {
    const { apiKey, onUploadSuccess, onUploadFailure } = props;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    async function uploadImage(file: File, apiKey: string): Promise<string> {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${apiKey}`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.status === 200) {
            return data.data.url;
        } else {
            throw new Error(data.error.message);
        }
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        setSelectedFile(file);
        setIsChecked(true);

        uploadImage(file, apiKey)
            .then((imageUrl) => onUploadSuccess(imageUrl))
            .catch((error) => onUploadFailure(error));
    }

    return (
        <div className="icon-button-container">
            <label htmlFor="file-input">
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{
                        backgroundColor: "#1E88E5",
                        color: "white",
                        borderRadius: "8px",
                        padding: "8px",
                        "&:hover": {
                            backgroundColor: "#1565C0",
                        },
                    }}
                >
                    <input
                        id="file-input"
                        accept="image/*"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                    <PhotoCamera />
                    <div className="icon-button-overlay" style={{ marginLeft: "8px" }}>
                        Subir foto
                    </div>
                </IconButton>
            </label>
            {selectedFile && (
                <span style={{ marginLeft: "8px", color: "#1E88E5" }}>
          {selectedFile.name}
        </span>
            )}
            {isChecked && (
                <div
                    style={{
                        display: "inline-block",
                        marginLeft: "8px",
                        animation: "fadeIn 0.5s",
                    }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                        <path
                            d="M7 13L9 15L17 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default ImgbbUploader;
