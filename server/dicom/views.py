# -*- coding: utf-8 -*-
from django.http import JsonResponse
from pydicom import dcmread
import json


ds = dcmread("sample.dcm")

# Create your views here.


def image(request):
    list = ds.pixel_array.tolist()
    response = json.dumps(list)
    return JsonResponse(response, safe=False)


def patient(request):
    return JsonResponse({"patientname": str(ds.PatientName),
                         "patientid": str(ds.PatientName),
                         "patientage": str(ds.PatientAge),
                         "patientposition": str(ds.PatientPosition),
                         "imageorientationpatient": str(ds.ImageOrientationPatient),
                         "imagepositionpatient": str(ds.ImagePositionPatient)}, safe=False)


def study(request):
    return JsonResponse({'studydate': str(ds.StudyDate),
                         'studydescription': str(ds.StudyDescription),
                         'studyinstanceuid': str(ds.StudyInstanceUID),
                         'studytime': str(ds.StudyTime),
                         })


# ['AcquisitionDate', 'AcquisitionTime', 'BitsAllocated', 'BitsStored', 'Columns', 'ContentDate', 'ContentTime',
#  'ContrastBolusAgent', 'ConvolutionKernel', 'DataCollectionDiameter', 'Exposure', 'FilterType', 'FrameOfReferenceUID',
#  'GantryDetectorTilt', 'HighBit', 'ImageComments', 'ImageOrientationPatient', 'ImagePositionPatient', 'ImageType',
#  'InstanceCreationDate', 'InstanceCreationTime', 'InstanceNumber', 'KVP', 'LossyImageCompression', 'LossyImageCompressionRatio',
#  'Modality', 'PatientAge', 'PatientID', 'PatientName', 'PatientPosition', 'PerformedProcedureStepDescription',
#  'PerformedProtocolCodeSequence', 'PhotometricInterpretation', 'PixelData', 'PixelRepresentation', 'PixelSpacing',
#  'ProcedureCodeSequence', 'ProtocolName', 'ReconstructionDiameter', 'ReferencedPerformedProcedureStepSequence',
#  'RequestAttributesSequence', 'RequestedProcedureID', 'RescaleIntercept', 'RescaleSlope', 'RotationDirection', 'Rows',
#  'SOPClassUID', 'SOPInstanceUID', 'SamplesPerPixel', 'ScanOptions', 'ScheduledProcedureStepDescription',
#  'ScheduledProcedureStepID', 'ScheduledProtocolCodeSequence', 'SeriesDescription', 'SeriesInstanceUID', 'SeriesNumber',
#  'SliceLocation', 'SliceThickness', 'SpacingBetweenSlices', 'SpecificCharacterSet', 'StudyDate', 'StudyDescription',
#  'StudyInstanceUID', 'StudyTime', 'TableHeight', 'WindowCenter', 'WindowWidth', 'XRayTubeCurrent']
