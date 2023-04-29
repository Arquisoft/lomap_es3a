import ContactForm from "../../components/help/ContactForm";
import {render, fireEvent, RenderResult, getByPlaceholderText} from "@testing-library/react";

describe("ContactForm", () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<ContactForm/>);
    })

    afterEach(() => {
        component.unmount();
    })

    it("renders contact form correctly", () => {
        expect(component.getByText("Contact us")).toBeInTheDocument();
        expect(component.getByLabelText("Your name:")).toBeInTheDocument();
        expect(component.getByLabelText("Your email:")).toBeInTheDocument();
        expect(component.getByLabelText("Your message:")).toBeInTheDocument();
        expect(component.getByText("Send")).toBeInTheDocument();
    });

    it("renders placeholders correctly", () => {
        expect(component.getByPlaceholderText("Write your name...")).toBeInTheDocument();
        expect(component.getByPlaceholderText("Write your email...")).toBeInTheDocument();
        expect(component.getByPlaceholderText("Write your message...")).toBeInTheDocument();
    });

    it("requires name and email fields to be filled before submit", () => {
        const sendButton = component.getByText("Send");
        fireEvent.click(sendButton);
        expect(component.getByLabelText("Your name:")).toBeInvalid();
        expect(component.getByLabelText("Your email:")).toBeInvalid();
    });

    it("handles name input correctly", () => {
        const nameInput = component.getByLabelText("Your name:") as HTMLInputElement;
        const newName = "Omar Teixeira";
        fireEvent.change(nameInput, {target: {value: newName}});
        expect(nameInput.value).toEqual(newName);
    });

    it("handles email input correctly", () => {
        const emailInput = component.getByLabelText("Your email:") as HTMLInputElement;
        const newEmail = "uo281847@gmail.com";
        fireEvent.change(emailInput, {target: {value: newEmail}});
        expect(emailInput.value).toEqual(newEmail);
    });

    it("handles message input correctly", () => {
        const messageInput = component.getByLabelText("Your message:") as HTMLInputElement;
        const newMessage = "Hello, this is a test message";
        fireEvent.change(messageInput, {target: {value: newMessage}});
        expect(messageInput.value).toEqual(newMessage);
    });

    it("handles form submit correctly", () => {
        const spy = jest.spyOn(console, "log");
        const nameInput = component.getByLabelText("Your name:") as HTMLInputElement;
        const emailInput = component.getByLabelText("Your email:") as HTMLInputElement;
        const messageInput = component.getByLabelText("Your message:") as HTMLInputElement;
        const sendButton = component.getByText("Send");

        const newName = "Omar Teixeira";
        const newEmail = "uo281847@gmail.com";
        const newMessage = "Hello, this is a test message";

        fireEvent.change(nameInput, {target: {value: newName}});
        fireEvent.change(emailInput, {target: {value: newEmail}});
        fireEvent.change(messageInput, {target: {value: newMessage}});

        fireEvent.click(sendButton);

        expect(nameInput.value).toEqual("");
        expect(emailInput.value).toEqual("");
        expect(messageInput.value).toEqual("");

        expect(spy).toHaveBeenCalledWith(`Nombre: ${newName}, Email: ${newEmail}, Mensaje: ${newMessage}`);
    });

    it("submitting without filling required fields shows validation errors", () => {
        const handleSubmit = jest.fn();
        const nameInput = component.getByLabelText("Your name:");
        const emailInput = component.getByLabelText("Your email:");
        const sendButton = component.getByText("Send");

        fireEvent.click(sendButton);

        expect(nameInput).toBeInvalid();
        expect(emailInput).toBeInvalid();
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});