import { Curriculum, Hero } from "@components/ui/course"
import { Modal } from "@components/ui/web3/common"
import { BaseLayout } from "@components/ui/layout"
export default function Course() {
    return (
      <>
        <Hero/>
        <Curriculum />
        <Modal/>
      </>
    )
  }
  
  Course.Layout = BaseLayout