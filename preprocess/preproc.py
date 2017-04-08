# -*- coding: utf-8 -*-
"""
Created on Fri Apr 07 16:32:07 2017

@author: Yamuna
"""

import os
# Traversing to file path
os.chdir("..\\preprocess\\")
# Importing dataset
import csv
with open('data.csv', 'rb') as f:
 reader = csv.reader(f)
 preproc = list(reader)
station=[]
count = 0

for i in preproc:
 if ("station" in i):
 #print i
     station.append(i)
     count = count+1
 #print station
print count,"records added to station.csv file"
with open("station.csv", "w") as output:
 writer = csv.writer(output, lineterminator='\n')
 writer.writerows(station)