import React from "react";
import {render, fireEvent, screen, waitFor} from "@testing-library/react";
import ImgUploader from "../../components/map/ImgUploader";

const apiKey = "your_api_key";

describe("ImgUploader component", () => {
    test("renders without errors", () => {
        render(
            <ImgUploader
                apiKey={apiKey}
                onUploadSuccess={() => {}}
                onUploadFailure={() => {}}
            />
        );
    });

    test("upload failure", async () => {
        const onUploadFailure = jest.fn();
        const {container} = render(
            <ImgUploader
                apiKey={apiKey}
                onUploadSuccess={() => {}}
                onUploadFailure={onUploadFailure}
            />
        );
        const input = container.querySelector("input[type=file]");
        fireEvent.change(input!, {target: {files: [new File([], "empty")]}});
        await waitFor(() => {
            expect(onUploadFailure).toHaveBeenCalledTimes(1);
            expect(onUploadFailure).toHaveBeenCalledWith(expect.any(Error));
        });
    });

    test("displays selected file name", async () => {
        const {container} = render(
            <ImgUploader
                apiKey={apiKey}
                onUploadSuccess={() => {}}
                onUploadFailure={() => {}}
            />
        );
        const input = container.querySelector("input[type=file]");
        fireEvent.change(input!, {target: {files: [new File([], "test.jpg")]}});
        await waitFor(() => {
            expect(screen.getByText("test.jpg")).toBeInTheDocument();
        });
    });
});
