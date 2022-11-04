const text=[
    `I'm baby pug mlkshk jianbing lyft, you probably haven't heard of them kogi waistcoat vaporware quinoa biodiesel disrupt health goth. Seitan cray blue bottle man bun. Photo booth PBR&B migas quinoa kale chips mlkshk bicycle rights. Kale chips crucifix pabst hot chicken bodega boys 8-bit twee knausgaard jean shorts humblebrag tumblr chicharrones.`,
    `Chicharrones fixie mukbang edison bulb meditation enamel pin roof party jean shorts tote bag. Taiyaki kale chips try-hard, gluten-free messenger bag godard before they sold out trust fund la croix. Pickled vice organic, XOXO keffiyeh distillery portland slow-carb. Lo-fi gentrify praxis 3 wolf moon DSA banh mi pabst, man bun offal activated charcoal irony swag chicharrones VHS.`,
    `Bitters big mood tacos fam. Intelligentsia same cornhole copper mug, etsy single-origin coffee heirloom tote bag cronut. Yes plz 8-bit gochujang stumptown intelligentsia flannel. Try-hard church-key tattooed, live-edge portland activated charcoal keffiyeh jean shorts Brooklyn you probably haven't heard of them neutra big mood. Beard palo santo vice, direct trade artisan DSA thundercats fashion axe taiyaki hell of cliche typewriter vegan umami deep v.`,
    `Cliche keytar pok pok tilde, affogato authentic skateboard post-ironic gluten-free disrupt mumblecore tbh pour-over. Pok pok twee chillwave, hot chicken iPhone small batch semiotics selvage. Wayfarers hella portland, hoodie kogi prism quinoa fit mustache authentic migas cliche thundercats single-origin coffee humblebrag. Heirloom woke fingerstache chambray affogato knausgaard, meh poke kale chips wayfarers flexitarian helvetica skateboard cold-pressed. Bushwick tousled street art tumeric la croix, readymade tote bag gochujang wayfarers affogato irony synth blog forage mumblecore. Blue bottle locavore taiyaki, kogi truffaut polaroid roof party.`,
    `Banh mi artisan DIY, street art next level stumptown bruh cloud bread bicycle rights cornhole air plant fit actually. Taxidermy kombucha knausgaard vexillologist tonx 3 wolf moon, la croix paleo ennui. Seitan edison bulb vegan man braid beard squid fingerstache messenger bag chambray succulents artisan celiac everyday carry yes plz pinterest. PBR&B ugh asymmetrical cardigan, locavore gochujang austin adaptogen fixie echo park thundercats organic gatekeep leggings 8-bit.`,
    `Four loko wolf umami, everyday carry praxis celiac master cleanse franzen viral air plant freegan. 90's sus DIY street art freegan, swag post-ironic cardigan locavore poke art party edison bulb. Roof party crucifix pinterest keffiyeh sriracha yuccie pok pok gochujang lomo chia normcore air plant. Wolf distillery selfies pour-over fit blue bottle. Pickled raclette tumeric hammock man braid actually narwhal poutine biodiesel.`,
    `Meditation biodiesel taiyaki single-origin coffee shaman, disrupt plaid live-edge bespoke 90's vegan JOMO. Salvia microdosing celiac bicycle rights, wolf af kogi man braid next level etsy listicle lo-fi. Poke twee hashtag, organic cornhole health goth asymmetrical vegan deep v cloud bread master cleanse jianbing selvage chambray listicle. Slow-carb butcher typewriter leggings la croix hoodie chartreuse pinterest cold-pressed kitsch iPhone stumptown tumeric retro. Skateboard biodiesel thundercats, scenester succulents hoodie ugh distillery before they sold out beard cronut praxis mlkshk.`,
    `Fanny pack vibecession big mood artisan, mumblecore vinyl fixie lo-fi next level portland biodiesel bespoke. Pinterest distillery umami disrupt chillwave, fam hoodie poutine intelligentsia yr poke 90's cliche YOLO. Vibecession craft beer godard wayfarers hella unicorn glossier meditation four loko fanny pack polaroid roof party iPhone pabst quinoa. Vice butcher ugh humblebrag portland, chicharrones edison bulb hammock fam. Quinoa cloud bread af sus stumptown.`,
    `Godard activated charcoal microdosing post-ironic, mumblecore heirloom twee pug disrupt franzen drinking vinegar. Flannel same synth narwhal XOXO vice bicycle rights microdosing pop-up put a bird on it thundercats. Big mood cred fit copper mug viral drinking vinegar artisan pour-over skateboard keffiyeh you probably haven't heard of them. Williamsburg etsy praxis glossier kale chips flexitarian semiotics quinoa organic leggings VHS irony. Schlitz salvia keffiyeh beard actually, mumblecore meggings hell of stumptown raw denim four loko pok pok. Quinoa iceland tacos, mixtape fixie tonx heirloom marfa vape listicle.`,
    `Migas crucifix jianbing bicycle rights brunch, vegan mustache four dollar toast single-origin coffee. Hexagon taiyaki man bun green juice, gentrify mixtape +1 chartreuse biodiesel fit retro. Aesthetic occupy schlitz, echo park iceland wayfarers post-ironic sustainable DSA craft beer narwhal succulents enamel pin. Normcore ennui trust fund knausgaard, fingerstache chia deep v tote bag lyft humblebrag. Tonx butcher pug literally, narwhal viral XOXO.`
];
const form=document.querySelector(".form");
const paranum=document.getElementById("paranum");
const paraRange=document.getElementById("paraRange");
const result=document.querySelector(".lorem-text");
function syncParanum(e){
    const value=e.target.value;
    paranum.value=value;
    paraRange.value=value;
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    const value=parseInt(paranum.value);
    let tempText=text.slice(0,value);
    tempText=tempText.map(item=>`<p class="result">${item}</p>`).join("");
    result.innerHTML=tempText;
  
})
paranum.addEventListener("input",syncParanum);
paraRange.addEventListener("input",syncParanum);
