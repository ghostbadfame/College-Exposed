import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from 'recharts';
import {AiOutlineStar} from "react-icons/ai"

interface Review {
  rating: number
}

interface Props {
  reviews: Review[]
}

const BarGraph: React.FC<Props> = ({ reviews }) => {
  const data = [
    { name: '5 ★', rating: reviews.filter(review => review.rating === 5).length },
    { name: '4 ★', rating: reviews.filter(review => review.rating === 4).length },
    { name: '3 ★', rating: reviews.filter(review => review.rating === 3).length },
    { name: '2 ★', rating: reviews.filter(review => review.rating === 2).length },
    { name: '1 ★', rating: reviews.filter(review => review.rating === 1).length },
  ]

  const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff']

  return (
    <div className="w-full max-w-max  overflow-hidden mx-auto">
    <BarChart width={300} height={200} data={data} layout="vertical" margin={{right:30 }} className='pt-4' >
      <XAxis type="number" tick={false} axisLine={false}/>
      <YAxis 
          type="category" 
          dataKey="name" 
          tick={{
            fontSize: 18, 
            fontWeight: 'medium', 
            fill: '#4b5563',
            
          }} 
          axisLine={false} 
          tickLine={false} 
        />
      <Bar dataKey="rating" barSize={10} radius={10}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        <LabelList dataKey="rating" position="right"  fontWeight="bold" fontSize={15}  />
      </Bar>
    </BarChart>
  </div>
  )
}

export default BarGraph;
