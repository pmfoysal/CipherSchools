import api from '@middlewares/api';
import Button from '@shared/button';
import Layout from '@layouts/layout';
import { toast } from 'react-toastify';
import Textbox from './partials/textbox';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadContainer, UploadContent, UploadForm, UploadTitle } from './upload.styled';

export default function Upload() {
   const navigate = useNavigate();
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');
   const [thumb, setThumb] = useState('');
   const [video, setVideo] = useState('');
   const [loading, setLoading] = useState(false);
   const [disable, setDisable] = useState(true);

   function resetHandler() {
      setTitle('');
      setDesc('');
      setThumb('');
      setVideo('');
   }

   async function submitHandler() {
      if (!title || !desc || !thumb || !video) return;
      const payload = {
         title,
         description: desc,
         thumbnail: thumb,
         video,
      };
      try {
         setLoading(true);
         setDisable(true);
         const { data } = await api.post('/videos', payload);
         setLoading(false);
         if (data?.data) {
            navigate('/');
         }
      } catch (res) {
         setDisable(true);
         setLoading(false);
         toast.error(res?.error || res?.message);
      }
   }

   useEffect(() => {
      if (!title || !desc || !thumb || !video) {
         setDisable(true);
         setLoading(false);
      } else {
         setDisable(false);
         setLoading(false);
      }
   }, [title, desc, thumb, video]);

   return (
      <Layout>
         <UploadContainer>
            <UploadTitle>Add new video</UploadTitle>
            <UploadContent>
               <UploadForm>
                  <Textbox name='Video Title' holder='Some awesome video title' line={2} value={title} setter={setTitle} />
                  <Textbox name='Video Link' holder='Video valid hosted link' line={2} value={video} setter={setVideo} />
                  <Textbox name='Thumbnail Link' holder='Video thumbnail link' line={2} value={thumb} setter={setThumb} />
                  <Textbox
                     name='Video Description'
                     holder='Some awesome video description'
                     line={10}
                     value={desc}
                     setter={setDesc}
                  />
                  <div className='buttons'>
                     <Button name='Reset' handler={resetHandler} />
                     <Button name='Upload' main loading={loading} disable={disable} handler={submitHandler} />
                  </div>
               </UploadForm>
            </UploadContent>
         </UploadContainer>
      </Layout>
   );
}
