import { useState ,useEffect} from "react";


function Translate()
{

    let [langauages,setLanguages]=useState(null);

useEffect(()=>{
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'cab0ab8cf2mshc991fe29cfc2910p1022b6jsn3abe8d7e77e5',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};

 fetch(url,options)
 .then((res)=>{return res.json()})
 .then((data)=>{ setLanguages(data.data.languages); })
   },[])


let [tranlatedText,settranlatedText] = useState("");


let tranlate = ()=>{
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'cab0ab8cf2mshc991fe29cfc2910p1022b6jsn3abe8d7e77e5',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: document.getElementById("input").value,
		target: document.getElementById("lang").value,
		source: 'en'
	})
};

fetch(url,options)
.then((res)=>{return res.json()})
.then((data)=>{settranlatedText(data.data.translations[0].translatedText);})

}
    return (
        <div className="box1">
           
            <div className="box2">

                <h1>***Language Translator***</h1>
                <hr />
                <textarea name="" id="input" cols="30" rows="10" placeholder="Enter the text to translate "></textarea> <br />
                { langauages && <select id="lang">
                <option id="lang">--Select Language--</option>
                {
                    langauages.map((v)=>{return (<option>{v.language}</option>);})
                }
                </select> }

                <br /><br /> <button onClick={tranlate}>TRANSLATE</button> <br /><br />

                <textarea name="" id="" cols="30" rows="10" value={tranlatedText} placeholder="Translated text"></textarea>

            </div>
           
        </div>
    )
}

export default Translate;