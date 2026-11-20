import React from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Header({ page, setPage, cartCount, onCart }) {
  const [open, setOpen] = React.useState(false);
  const links = [["Home","home"],["Our Product","product"],["Flavours","flavours"],["Our Story","about"],["Ingredients","ingredients"],["FAQ","faq"],["Contact","contact"]];
  const go = (p) => { setPage(p); setOpen(false); window.scrollTo({top:0,behavior:"smooth"}); };
  return <header className="header">
    <button className="wordmark" onClick={()=>go("home")} aria-label="AuraFizz home">AuraFizz<span>✳</span></button>
    <nav className={open ? "nav nav--open" : "nav"}>
      {links.map(([label,id])=><button key={id} className={page===id?"nav-link active":"nav-link"} onClick={()=>go(id)}>{label}</button>)}
      <button className="mobile-shop" onClick={()=>go("shop")}>Shop now</button>
    </nav>
    <div className="header-actions">
      <button className="shop-link" onClick={()=>go("shop")}>Shop now <span>↗</span></button>
      <button className="cart-button" onClick={onCart} aria-label={`Open cart, ${cartCount} items`}><ShoppingBag size={18}/>{cartCount>0&&<b>{cartCount}</b>}</button>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </div>
  </header>;
}