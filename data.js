// Replace this browser-local prototype repository with a versioned API in production.
export const defaults = {
  settings: { name: '[Church name]', network: '[Denomination or network]', location: '[Church address]', email: '[Church email]', phone: '[Church phone]', service: '[Service day and time]', giving: '[Approved giving methods and details]' },
  pages: [
    { id:'about', title:'About the Church', summary:'A place to belong, grow and serve.', body:'[Add the church story, mission and community information here.]', status:'Published' },
    { id:'beliefs', title:'Our Beliefs', summary:'What shapes our worship and life together.', body:'[Add the church’s approved statement of faith here.]', status:'Published' },
    { id:'leadership', title:'Leadership', summary:'Meet the people who serve this community.', body:'[Add verified leadership names, roles and photographs here.]', status:'Published' },
    { id:'visit', title:'Plan Your Visit', summary:'Your first visit starts here.', body:'[Add arrival, accessibility, children’s ministry and service details here.]', status:'Published' },
    { id:'giving', title:'Giving Information', summary:'Support the work of the church.', body:'[Add approved giving methods. No payments are processed in this prototype.]', status:'Published' },
    { id:'privacy', title:'Privacy Policy', summary:'How personal information will be handled.', body:'[Replace with a reviewed privacy policy before production. Include POPIA notices, retention and contact information.]', status:'Published' }
  ],
  sermons: [
    { id:'sample-sermon-1', title:'A community shaped by hope', series:'Sample series', speaker:'[Speaker]', date:'2026-10-11', scripture:'[Scripture reference]', description:'Sample sermon content for layout and navigation. Replace with approved media and teaching.', category:'Faith' },
    { id:'sample-sermon-2', title:'Faith in everyday life', series:'Sample series', speaker:'[Speaker]', date:'2026-10-04', scripture:'[Scripture reference]', description:'Sample sermon content for layout and navigation.', category:'Life' },
    { id:'sample-sermon-3', title:'An invitation to serve', series:'Sample series', speaker:'[Speaker]', date:'2026-09-27', scripture:'[Scripture reference]', description:'Sample sermon content for layout and navigation.', category:'Community' }
  ],
  events: [
    { id:'sample-event-1', title:'Community gathering', category:'Community', date:'2026-11-07', time:'[Time to be confirmed]', location:'[Venue to be confirmed]', description:'Sample event. Add approved details before publishing.', status:'Published' },
    { id:'sample-event-2', title:'Prayer evening', category:'Prayer', date:'2026-11-14', time:'[Time to be confirmed]', location:'[Venue to be confirmed]', description:'Sample event. Add approved details before publishing.', status:'Published' }
  ],
  ministries: [
    { title:'Children & families', description:'[Describe the approved children and families ministry.]' },
    { title:'Young adults', description:'[Describe the approved young adults ministry.]' },
    { title:'Community care', description:'[Describe the approved community care ministry.]' }
  ],
  announcements: [{ title:'Welcome to our new website', date:'2026-10-18', body:'Sample announcement. Replace with approved church news before launch.' }]
};
const key='church-platform-prototype-v1';
export function getData(){ try { const saved=JSON.parse(localStorage.getItem(key)); return saved ? {...structuredClone(defaults),...saved} : structuredClone(defaults); } catch { return structuredClone(defaults); } }
export function saveData(data){ localStorage.setItem(key,JSON.stringify(data)); window.dispatchEvent(new Event('prototype-data-change')); }
export function escapeHtml(value=''){ return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
export function readableDate(value){ return new Intl.DateTimeFormat('en-ZA',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T12:00:00Z')); }
