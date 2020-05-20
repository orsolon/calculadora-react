import React from 'react';
import { render } from '@testing-library/react';
import Calculadora from './Calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {

  test('renders learn react link', () => {
    const { getByText } = render(<Calculadora />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

  });

  it('deve limpar o campo de numeros', () =>{
    const { getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTextId('txtNumeros')).toHaveValue('0');
  }); 

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTextId('txtNumeros')).toHaveValue('5.5');
  });

  it('deve dividir 6 / 3 e obter 2', () => {
    const { getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTextId('txtNumeros')).toHaveValue('2');
  });

  it('deve multiplicar 2 * 3 e obter 6w', () => {
    const { getByTestId, getByText} = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTextId('txtNumeros')).toHaveValue('6');
  });



});
