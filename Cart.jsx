import React from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { flavours } from "../data";

export default function Cart({ open, onClose, cart, setCart }) {
  const update=(id,delta)=>setCart(old=>old.map(x=>x.id===id?{...x,qty:Math.max(0,x.qty+delta)}:x).filter(x=>x.qty>0));
  const items=cart.map(x=>({...x,flavour:flavours.find(f=>f.id===x.id)}));
  const count=cart.reduce((n,x)=>n+x.qty,0);
  return <>
    {open&&<div className="drawer-scrim" onClick={onClose}/>}
    <aside className={`cart-drawer ${open?"cart-drawer--open":""}`} aria-hidden={!open}>
      <div className="drawer-head"><div><span className="eyebrow">YOUR BAG</span><h2>Your AuraFizz</h2></div><button className="icon-button" onClick={onClose}><X/></button></div>
      {count===0?<div className="empty-cart"><ShoppingBag size={34}/><h3>Your bag is taking a breather.</h3><p>Add a flavour to get started.</p></div>:
      <><div className="cart-lines">{items.map(x=><div className="cart-line" key={x.id}><div className="cart-swatch" style={{background:x.flavour.pale}}><span style={{background:x.flavour.accent}}/></div><div className="cart-info"><b>{x.flavour.name}</b><small>250 ml · 20g* protein concept</small><div className="qty"><button onClick={()=>update(x.id,-1)}><Minus size={13}/></button><span>{x.qty}</span><button onClick={()=>update(x.id,1)}><Plus size={13}/></button></div></div><strong>Price soon</strong></div>)}</div>
      <div className="cart-foot"><p>Pricing and checkout will be enabled when the product launches.</p><button className="button button-dark full" disabled>Checkout coming soon</button></div></>}
    </aside>
  </>;
}