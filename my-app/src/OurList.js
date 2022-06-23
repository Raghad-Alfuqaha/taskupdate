const OurList = ({ ...props }) => {
    const {photo:info} = props;
    return (
      <div className='list'>
       
        {info.map(info => (
          <div key={info.id} className="test" >
            <p >
              {info.title} 
              <br />
              {info.url}
              <br />
              {info.albumId}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default OurList;