import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Arial, sans-serif", background:"#0a0a0f", minHeight:"100vh", color:"white"}}>
      <header style={{padding:"20px 40px", borderBottom:"1px solid #222", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h1 style={{margin:0, color:"#b78cff"}}>CELA TECH</h1>
        <a href="https://wa.me/5554991416396" style={{background:"#8b5cf6", color:"white", padding:"12px 20px", borderRadius:"999px", textDecoration:"none"}}>
          WhatsApp
        </a>
      </header>

      <section style={{padding:"80px 40px", textAlign:"center"}}>
        <h2 style={{fontSize:"52px", marginBottom:"20px"}}>
          Tecnologia que <span style={{color:"#b78cff"}}>te acompanha.</span>
        </h2>
        <p style={{maxWidth:"700px", margin:"0 auto", color:"#bbb", fontSize:"20px"}}>
          Capinhas, fones, caixas de som, gadgets, acessórios e seminovos premium.
        </p>
      </section>

      <section style={{display:"grid", gridTemplateColumns":"repeat(auto-fit,minmax(240px,1fr))", gap:"20px", padding:"40px"}}>
        {[
          ["Fone Bluetooth","R$ 79,90"],
          ["Capinha Premium","R$ 39,90"],
          ["Caixa JBL Mini","R$ 129,90"],
          ["Power Bank","R$ 89,90"]
        ].map((item, i) => (
          <div key={i} style={{background:"#15151d", borderRadius:"24px", padding:"24px"}}>
            <div style={{height:"180px", borderRadius:"18px", background:"#222"}} />
            <h3>{item[0]}</h3>
            <p style={{color:"#b78cff", fontWeight:"bold"}}>{item[1]}</p>
            <a href="https://wa.me/5554991416396" style={{display:"inline-block", marginTop:"12px", background:"#8b5cf6", color:"white", padding:"10px 18px", borderRadius:"999px", textDecoration:"none"}}>
              Comprar
            </a>
          </div>
        ))}
      </section>

      <footer style={{padding:"30px", textAlign:"center", color:"#777"}}>
        © 2026 Cela Tech
      </footer>
    </div>
  );
}
