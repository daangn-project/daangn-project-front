import ItemPostCard from "../pages/marketplace/itemPostCard";

const ItemPostContainer = () => {
    return (
        <section className="py-4">
        <div className="container-xxl mb-3">
          <div className=" row mb-3 justify-content-end">
          </div>

          <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 row-cols-xxl-4 gy-5" >
            <ItemPostCard/>
            <ItemPostCard/>
            <ItemPostCard/>
            <ItemPostCard/>
            <ItemPostCard/>
            <ItemPostCard/>
            <ItemPostCard/>
            <ItemPostCard/>
          </div>
        </div>
      </section>
    )

}

export default ItemPostContainer;