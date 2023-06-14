import H1 from '@/utils/H1'


const DesContent = ({content,title}:{content:string,title:string}) => {
  return (
    <div className="my-3 gap-4 flex flex-col w-full justify-center ">
            <h1 className="text-white text-center text-6xl font-bold my-5">{title}</h1>
            <p className="text-p-purple text-sm">
              {content}
            </p>
          </div>
  )
}

export default DesContent