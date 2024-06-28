 import './Header.css'
 import header from '../assets/logi.jpg'
export default function Header() {
  return (
     <div className='header'>
     <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}><img src={header} alt="header" style={{width:1100, height:600, alignSelf:"center"}}/></div> 
     <div>
      <h2 style={{textAlign:"center", fontWeight:"bold"}}>Ghana Blogs: A Vibrant Online Community</h2>
      <p style={{textAlign:"center"}}>Ghana's blogging scene is a dynamic and diverse landscape that reflects the country's rich cultural heritage, vibrant political discourse, and evolving digital economy. From personal diaries to professional news outlets, Ghanaian bloggers cover a wide range of topics, providing valuable insights and creating a robust online community.</p>
     </div>
     </div>
  );
}
