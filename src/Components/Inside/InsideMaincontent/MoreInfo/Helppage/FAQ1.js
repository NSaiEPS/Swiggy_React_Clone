import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ1() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"

          className='Help_FAQ_summary'
        >
          <Typography 
          className='Help_FAQ_Typography'
          >
          I want to partner my restaurant with Swiggy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Partner with us
SEND AN EMAIL
We will revert within 24-48 hrs
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='Help_FAQ_summary'

        >
          <Typography
          className='Help_FAQ_Typography'
          
          >What are the mandatory documents needed to list my restaurant on Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          -  Copies of the below documents are mandatory
-  FSSAI Licence OR FSSAI Acknowledgement
-  Pan Card
-  GSTIN Certificate
-  Cancelled Cheque OR bank Passbook
-  Menu
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='Help_FAQ_summary'

        >
          <Typography
          className='Help_FAQ_Typography'
          
          >After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After all mandatory documents have been received and verified 
          it takes upto 7-10 working days for the onboarding to be completed 
          and make your restaurant live on the platform.t.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='Help_FAQ_summary'

        >
          <Typography
          className='Help_FAQ_Typography'
          
          >What is this one time Onboarding fees? Do I have to pay for it while registering?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          className='Help_FAQ_Typography'
          
          >
          This is a one-time fee charged towards the system & admin costs 
          incurred during the onboarding process. It is deducted from the weekly 
          payouts after you start receiving orders from Swiggy.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='Help_FAQ_summary'

        >
          <Typography
          className='Help_FAQ_Typography'
          
          >Who should I contact if I need help & support in getting onboarded?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in
SEND AN EMAIL
We will revert within 24-48 hrs
          </Typography>
        </AccordionDetails>
      </Accordion>
    

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='Help_FAQ_summary'

        >
          <Typography
          className='Help_FAQ_Typography'
          
          >  How much commission will I be charged by Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The commission charges vary for different cities. You will be able
           to see the commission applicable for
           you once the preliminary onboarding details have been filled.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* I don’t have an FSSAI licence for my restaurant. Can it still be onboarded? */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='Help_FAQ_summary'

        >
          <Typography
          className='Help_FAQ_Typography'
          
          >   I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FSSAI licence is a mandatory requirement according to the government’s policies. However,
           if you are yet to receive the licence at the time of onboarding, 
           you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
