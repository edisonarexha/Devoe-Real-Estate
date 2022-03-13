const devoeController={
  list:(req,res)=>{
      return res.json([
          {
              type:'flat',
              stock:50
          },
          {
              type:'house',
              stock:50
          },
          {
              type:'office',
              stock:50
          },
      ])
  
  }
}

export default devoeController;