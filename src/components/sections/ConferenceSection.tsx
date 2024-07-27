import {getDictionary} from "@/dictionaries";
import ConferenceCard from "@/components/ConferenceCard";
import SectionTitle from "@/components/elements/SectionTitle";
import Day1Ja from "@/components/markdown/keynote_day1_ja.mdx";
import Day2Ja from "@/components/markdown/keynote_day2_ja.mdx";
import Day1En from "@/components/markdown/keynote_day1_en.mdx";
import Day2En from "@/components/markdown/keynote_day2_en.mdx";
import InvitationTalkJa from "@/components/markdown/invitation_talk_ja.mdx";
import InvitationTalkEn from "@/components/markdown/invitation_talk_en.mdx";

export default async function ConferenceSection({lang}: { lang: 'ja' | 'en' }) {
  const dictionary = await getDictionary(lang)

  return <section className="mt-20">
    <SectionTitle title={'Conference'} subtitle={dictionary.conference.subtitle} direction={'down'}
                  color={'secondary'}/>
    <div className='w-full flex items-center flex-col my-10 gap-2.5'>
      <h2 className='text-3xl font-manrope text-primary font-bold'>
        Keynote
      </h2>
      <p>
        {dictionary.conference.subtitle_keynote}
      </p>
    </div>
    <div className='flex lg:gap-7 gap-8 flex-col'>
      <ConferenceCard name={dictionary.conference.keynote_day1.speaker}
                      date={dictionary.conference.keynote_day1.date} image={'/conference/keynote_day1.png'}>
        {lang === 'ja' ? <Day1Ja/> : <Day1En/>}
      </ConferenceCard>

      <ConferenceCard name={dictionary.conference.keynote_day2.speaker}
                      date={dictionary.conference.keynote_day2.date} image={'/conference/keynote_day2.png'}>
        {lang === 'ja' ? <Day2Ja/> : <Day2En/>}
      </ConferenceCard>
    </div>
    <div className='w-full flex items-center flex-col my-10 gap-2.5'>
      <h2 className='text-3xl font-manrope text-primary font-bold'>
        Invited talk
      </h2>
      <p>
        {dictionary.conference.subtitle_invited_talk}
      </p>
    </div>
    <div className='flex lg:gap-7 gap-8 flex-col'>
      <ConferenceCard name={dictionary.conference.invited_talk.speaker}
                      date={dictionary.conference.invited_talk.date} image={'/conference/invitation_talk.png'}>
        {lang === 'ja' ? <InvitationTalkJa/> : <InvitationTalkEn/>}
      </ConferenceCard>
    </div>
  </section>
}