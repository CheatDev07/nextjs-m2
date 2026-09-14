
import CategoryListComponent from "@/components/category/CategoryListComponent";

export default function CategoryPage() {

const category = 
fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_PLAZI_API}/categories
  `)
.then ((data) => data.json())
.then(category => {console.log(category); return category;})

  return (
    <div>
      <CategoryListComponent category={category}/>
    </div>
  )
}
