'use client'

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


export default function projects(){
return(
    <w class="w">
        <Head>
            <title>Joey Lam"</title>
        </Head>
        <navbar class="nav">
            <div class="navbot">  
                <Link href="/"><Image width={32} height={32} src="/home.png"/></Link>
            </div>
            <div class="navbot">  
                <Link href="/skills"><Image width={32} height={32} src="/User.png"/></Link>
            </div>
            <div class="navbot">    
                <Link href="/projects"><Image width={32} height={32} src="/Document.png"/></Link>
            </div>
            <div id="timeline" class="navbot">    
                <Link href="/timeline"><Image width={32} height={32} src="/timeline.png"/></Link>
            </div>
        </navbar>
        <div>
            <h2 class="timetitle">Timeline</h2>
        </div>
        <div class="margintop">
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    5/24/2005
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot variant="outlined" color="success" />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">The day I was born</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    7/27/2018
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Graduated elementary school</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    7/27/2016
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Graduated middle school</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    9/18/2019
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Created my first website</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    8/29/2020
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Learned Javascript and python</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    9/9/2021
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Learned Java</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    7/21/2022
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Created Heyo app</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    12/29/2022
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Joined robotics build team</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    2/15/2023
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Acceptance into Boston University</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    4/1/2023
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Internship at Robomindtech</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    5/3/2023
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Human detector project</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    6/17/2023
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Created eportfolio website</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    6/27/2023
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="white">Graduated from Benjamin N Cardozo High School</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="#636363">
                    7/9/2023
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" id="pulse"/>



                </TimelineSeparator>
                <TimelineContent color="white">Cotracker (In-progress)</TimelineContent>
            </TimelineItem>
            </Timeline>
        </div>
        
    </w>
        
    )
}