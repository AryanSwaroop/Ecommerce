


export default function Footer(){
    const d = new Date();
    let year = d.getFullYear();

    return(
        <div className="footer">
             <footer>
      <p >Copyright ⓒ {year} </p>
             </footer>
        </div>
    );
}