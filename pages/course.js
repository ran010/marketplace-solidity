import { Curriculum, Hero } from "@components/ui/course"
import { Modal } from "@components/ui/common"
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