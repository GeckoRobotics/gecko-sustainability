import React from 'react'
import { googleFormsToJson } from 'react-google-forms-hooks'

const formResults = [
  {
    Timestamp: '2022/06/22 11:07:29 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?':
      '1 - "What is sustainability?',
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Confluence Page/Website (dedicated space to propose and track projects);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:07:33 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 2,
    'How well do you think Gecko addresses sustainability?': 4,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Reduce emissions from transportation (travel, shipping, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:07:36 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Pursue ISO 14001',
  },
  {
    Timestamp: '2022/06/22 11:07:45 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Reduce emissions from transportation (travel, shipping, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '3-4',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Sustainability Committee (interdepartmental assembly);Sustainability Shout-outs (Small Improvements)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:08:17 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "1 - It doesn't matter to me",
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Solar powered robotic inspections.',
  },
  {
    Timestamp: '2022/06/22 11:08:29 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Reduce emissions from transportation (travel, shipping, etc)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:08:41 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Reduce emissions from transportation (travel, shipping, etc)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:08:59 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:09:19 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?':
      '1 - "What is sustainability?',
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:10:20 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:10:54 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Reduce emissions from transportation (travel, shipping, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Bring this topic into our company’s regular vocabulary and dialogue!',
  },
  {
    Timestamp: '2022/06/22 11:11:07 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '3-4',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:11:48 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "1 - It doesn't matter to me",
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Sustainability Shout-outs (Small Improvements)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:13:53 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 4,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Energy & water usage (facilities);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:13:54 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?':
      "One of the easiest things to improve would probably be to try to reduce / eliminate single-use disposable materials in the cafeteria.\n\nWe have also gone back and forth throughout Gecko's history on the issue of beverage cans (from all of the La Croix cans to the infamous Bevi machine and now back to cans again). This seems like another good target for waste reduction.\n\nRemote desktop energy consumption might be another target. A lot of engineering desktops in particular are left on 24/7 and not entering sleep mode. With a small IT investment we could make sure that wake-on-LAN is configured properly so that these machines can sleep when they are not in use but still be accessible off-site when needed.",
  },
  {
    Timestamp: '2022/06/22 11:14:47 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Focus on the impacts we can bring to our clients. Maybe focus on recycling the precious metals we use in our robots?',
  },
  {
    Timestamp: '2022/06/22 11:14:52 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Reduce emissions from transportation (travel, shipping, etc)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:17:34 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Community service / outreach;Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?':
      "Really don't know what is done now.",
  },
  {
    Timestamp: '2022/06/22 11:17:50 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Reduce emissions from transportation (travel, shipping, etc)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:17:58 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:19:21 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Community service / outreach;Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:21:02 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:21:12 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 4,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Figure out a way to stop wasting all this food. We throw way too much but I have no idea how to change it other than not order so much, which might short someone on the opportunity to eat.',
  },
  {
    Timestamp: '2022/06/22 11:24:44 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues);Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:25:46 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Energy & water usage (facilities);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:26:59 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '3-4',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?':
      "If we're going to be transitioning to a model of selling customers on the idea of efficiency improvements and not just routine safety inspections, does it make sense for us to be making sustainability suggestions to customers as well?",
  },
  {
    Timestamp: '2022/06/22 11:28:58 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '3-4',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:31:12 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Reduce emissions from transportation (travel, shipping, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:34:45 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Reduce emissions from transportation (travel, shipping, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'supporting local initiatives for things like bike lanes, parks, etc.',
  },
  {
    Timestamp: '2022/06/22 11:42:17 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?':
      '1 - "What is sustainability?',
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:46:22 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Community service / outreach',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 11:56:08 AM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 3,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Reduce emissions from transportation (travel, shipping, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 12:06:24 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "1 - It doesn't matter to me",
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Energy & water usage (facilities);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'My fear is I see FAR too many ways "sustainability"/ESG could be twisted into a narrative that could be counterproductive and promote a hostile work environment. "Sustainability" is too subjective and open to interpretation. \nAre we going to force everyone to use paper straws, or are we going to help prevent the next spill at an oil refinery? Are we going to subsidize inspections that support some political agenda?\nToo often I see ESG stocks caring more about virtue signaling with small token ways over actually generating impact in a way that coincides with being profitable, well run, and in a way that sustains future growth/existence of a business.',
  },
  {
    Timestamp: '2022/06/22 12:19:24 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Officer (a new role focused on these issues)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 12:19:36 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 4,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Energy & water usage (facilities);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 12:24:19 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Reduce emissions from transportation (travel, shipping, etc)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Reusable dinnerware for the cafe, dishwashing would be problematic though.',
  },
  {
    Timestamp: '2022/06/22 12:33:09 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?': '.',
  },
  {
    Timestamp: '2022/06/22 12:39:27 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 2,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Reduce emissions from transportation (travel, shipping, etc)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 1:09:25 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '2-3',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 1:20:20 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?':
      '1 - "What is sustainability?',
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly);Confluence Page/Website (dedicated space to propose and track projects)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
  {
    Timestamp: '2022/06/22 1:26:52 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?': 4,
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Waste management (food, trash, technical waste, recycling, compost, etc);Energy & water usage (facilities)',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '0-1',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Confluence Page/Website (dedicated space to propose and track projects);Sustainability Shout-outs (Small Improvements);Incentives (prizes)',
    'What else do you think Gecko should be doing on a sustainability front?':
      'Recycling',
  },
  {
    Timestamp: '2022/06/22 1:54:29 PM AST',
    'How important is it for your employer to take sustainable efforts/initiatives seriously?':
      "5 - It's extremely important",
    'How well do you think Gecko addresses sustainability?': 3,
    'What types of sustainability efforts do you think Gecko should participate in? (Pick top 2!)':
      'Energy & water usage (facilities);Business partnerships / certifications',
    'How many community service / outreach events would you be willing to participate in throughout the year?':
      '5+',
    'What initiatives would you like to see at Gecko to track these efforts moving forward?':
      'Sustainability Committee (interdepartmental assembly)',
    'What else do you think Gecko should be doing on a sustainability front?': '',
  },
]

const GoogleForm = () => {
  return <div></div>
}

export default GoogleForm
