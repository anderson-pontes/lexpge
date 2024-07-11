import { Helmet } from 'react-helmet-async'
import { AtosCard } from './atos-card'
import { AtosTableFilters } from './atos-table-filters'
import { Pagination } from '@/components/pagination'




export function Atos() {

 
  return (
    <>
      <Helmet title="Atos Normativos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Atos Normativos</h1>

        <AtosTableFilters />

               
          {Array.from({length: 10}).map((_, i) => {
             return (
                <AtosCard key={i}/>
              )
          })}
        
                       

        <Pagination pageIndex={0} totalCount={18750} perPage={10}/>
         
      </div>
    </>
  )
}