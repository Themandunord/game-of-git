import { wait } from '@apollo/react-testing';
import { act, getByTestId } from '@testing-library/react';
import React from 'react';
import { ToastProps } from '../../../store/system/toast';
import ToastProviderTest from './testUtils/ToastProviderTest';

jest.mock('./Toast/Toast', () => {
    return function DummyToast(props: ToastProps) {
        return <div data-testid="dummy-toast">{props.children}</div>;
    };
});

const DUMMY_TOAST_SELECTOR = 'dummy-toast';
const DUMMY_TOAST_NOT_FOUND_ERROR = `Unable to find an element by: [data-testid="${DUMMY_TOAST_SELECTOR}"]`;

describe('Toast Provider', () => {
    it('When there is no toast in the System store, no toast message is displayed', async () => {
        const { findByTestId } = ToastProviderTest();
        await expect(findByTestId(DUMMY_TOAST_SELECTOR)).rejects.toThrow(
            DUMMY_TOAST_NOT_FOUND_ERROR,
        );
    });

    it('When there is a toast in the System state it is displayed', async () => {
        const {
            getByTestId,
            findByTestId,
        } = ToastProviderTest('some wrapped content', ['some toast message']);

        const addToastButton = await findByTestId('dev-add-toast');

        expect(() => getByTestId(DUMMY_TOAST_SELECTOR)).toThrow(
            DUMMY_TOAST_NOT_FOUND_ERROR,
        );
        await act(async () => {
            addToastButton.click();
            await wait(1000);
        });

        expect(getByTestId(DUMMY_TOAST_SELECTOR)).toBeDefined();
    });

    it('When there is a queue of toast messages, they are displayed sequentially as each is expired', async () => {
        const toastMessages = [
            'first message',
            'second message',
            'third message',
        ];
        const { getByTestId } = ToastProviderTest(
            'some wrapped content',
            toastMessages,
        );

        const addToast = () => getByTestId('dev-add-toast').click();

        expect(() => getByTestId(DUMMY_TOAST_SELECTOR)).toThrow(
            DUMMY_TOAST_NOT_FOUND_ERROR,
        );
        await act(async () => {
            addToast();
            await wait(1000);
        });

        expect(getByTestId(DUMMY_TOAST_SELECTOR)).toBeDefined();
        expect(getByTestId(DUMMY_TOAST_SELECTOR).textContent).toEqual(
            toastMessages[0],
        );

        await act(async () => {
            addToast();
        });

        expect(getByTestId(DUMMY_TOAST_SELECTOR).textContent).toEqual(
            toastMessages[0],
        );

        await act(async () => {
            addToast();
            getByTestId('dev-delete-toast').click();
        });

        expect(getByTestId(DUMMY_TOAST_SELECTOR).textContent).toEqual(
            toastMessages[1],
        );

        await act(async () => {
            getByTestId('dev-delete-toast').click();
        });

        expect(getByTestId(DUMMY_TOAST_SELECTOR).textContent).toEqual(
            toastMessages[2],
        );
        await act(async () => {
            getByTestId('dev-delete-toast').click();
        });

        expect(() => getByTestId(DUMMY_TOAST_SELECTOR)).toThrow(
            DUMMY_TOAST_NOT_FOUND_ERROR,
        );
    });
});
