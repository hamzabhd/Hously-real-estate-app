import EditProfileForm from '../_components/EditProfileFrom'

const EditProfile = () => {
  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[182px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
          Edit profile
        </h1>
        <p className="max-w-[545px] text-sm leading-relaxed text-black/80 lg:text-base">
          Maintain accurate information and customize your experience for smooth
          transactions. Please get in touch if you need any help.
        </p>
      </div>
      <EditProfileForm />
    </div>
  )
}

export default EditProfile
