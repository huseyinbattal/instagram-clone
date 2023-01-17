
const MiniProfile = () => {
  return (
      <div className="flex items-center justify-between mt-14 ml-10">
          <img className="h-16 rounded-full border p-[2px]"
              src="https://media.licdn.com/dms/image/C4D03AQFcRdc7CNsYfw/profile-displayphoto-shrink_800_800/0/1654269434464?e=2147483647&v=beta&t=oVKynO5g8Jkqdwg5_Ug6GUI2FEvUL7urEROUeVFTcjg"
              alt="user-image"
          />
          <div className="flex-1 ml-4">
              <h2 className="font-bold">codewithbattal</h2>
              <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  )
}

export default MiniProfile