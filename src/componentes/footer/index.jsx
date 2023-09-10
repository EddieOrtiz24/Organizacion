import "./footer.css"

const Footer = () => {
 return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
 <div className='redes'>
     <a href='https://twitter.com/EdgarOr32890881'>
         <img src="/img/facebook.png" alt='Facebook' />
     </a>
     <a href='https://www.aluracursos.com/'>
         <img src="/img/twitter.png" alt='twitter' />
     </a>
     <a href='https://www.instagram.com/edgar_ortiz_rb/'>
         <img src="/img/instagram.png" alt='instagram' />
     </a>
 </div>
 <img src='/img/Logo.png' alt='org' />
 <strong>Desarrollado por Edgar Ortiz</strong>
</footer>


}

export default Footer