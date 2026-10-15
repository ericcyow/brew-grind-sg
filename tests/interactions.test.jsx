import {afterEach,describe,it,expect} from 'vitest';
import {cleanup,render,screen,within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {App} from '../src/App.jsx';

afterEach(cleanup);
describe('visitor menu and navigation',()=>{
 it('starts with the sourced signature coffees, without unrelated categories',()=>{
  render(<App/>);
  const menu=document.getElementById('menu');
  expect(within(menu).getByRole('heading',{name:'Pandan Latte'})).toBeTruthy();
  expect(within(menu).getByRole('heading',{name:'Lavender Flat White'})).toBeTruthy();
  expect(within(menu).getByRole('heading',{name:'Popcorn Latte'})).toBeTruthy();
  expect(within(menu).queryByRole('heading',{name:'Bo Chup'})).toBeNull();
 });
 it('switches all menu categories and exposes the selected state',async()=>{
  const user=userEvent.setup();render(<App/>);
  const menu=document.getElementById('menu');
  for(const [category,item] of [['Local favourites','Kopi'],['Craft beer','Bo Chup'],['All-day bites','Pizza'],['Coffee','Pandan Latte']]){
   const button=screen.getByRole('button',{name:category,exact:true});
   await user.click(button);
   expect(button.getAttribute('aria-pressed')).toBe('true');
   expect(within(menu).getByRole('heading',{name:item,exact:true})).toBeTruthy();
   expect(within(menu).getAllByRole('heading',{level:3})).toHaveLength(3);
  }
 });
 it('opens navigation and closes it after selecting a destination',async()=>{
  const user=userEvent.setup();render(<App/>);
  const button=screen.getByRole('button',{name:'Open navigation'});
  expect(button.getAttribute('aria-expanded')).toBe('false');
  await user.click(button);
  expect(button.getAttribute('aria-expanded')).toBe('true');
  await user.click(within(screen.getByRole('navigation')).getByRole('link',{name:'Our story'}));
  expect(button.getAttribute('aria-expanded')).toBe('false');
 });
 it('closes navigation with Escape and returns keyboard focus',async()=>{
  const user=userEvent.setup();render(<App/>);
  const button=screen.getByRole('button',{name:'Open navigation'});
  await user.click(button);
  const link=within(screen.getByRole('navigation')).getByRole('link',{name:'Menu',exact:true});
  link.focus();await user.keyboard('{Escape}');
  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(button);
 });
});
