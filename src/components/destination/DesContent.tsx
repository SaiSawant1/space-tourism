import H1 from '@/utils/H1'


const DesContent = ({content,title}:{content:string,title:string}) => {
  return (
    <div className="my-3 gap-4 flex flex-col w-full justify-center ">
            <h1 className="text-white text-center text-6xl tablet:text-8xl font-bold my-5">{title}</h1>
            <p className="text-p-purple text-sm tablet:text-2xl tablet:text-center tablet:px-36">
              {content}
            </p>
          </div>
  )
}

export default DesContent