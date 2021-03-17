import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer'

const customers = [
{
  'id': 1,
  'image':'https://placeimg.com/512/512/1',
  'name': '김지응',
  'birthday': '911219',
  'gender': 'male',
  'job': '직장인'
},
{
  'id': 2,
  'image':'https://placeimg.com/512/512/2',
  'name': '이세영',
  'birthday': '920209',
  'gender': 'female',
  'job': '음악인'
},
{
  'id': 3,
  'image':'https://placeimg.com/512/512/3',
  'name': '김정원',
  'birthday': '650623',
  'gender': 'female',
  'job': '엄마'
},
{
  'id': 4,
  'image':'https://placeimg.com/512/512/4',
  'name': '김지용',
  'birthday': '881229',
  'gender': 'male',
  'job': '형'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c=>{
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday} 
              gender={c.gender}
              job={c.job}           
            />
          );
        })
      }
    </div>
    
  );
}

export default App;
