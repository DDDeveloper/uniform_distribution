Imports System.Threading
Imports System.IO
Imports System.Runtime.Serialization.Json
Imports Newtonsoft.Json.Linq

Partial Class _Default
    Inherits System.Web.UI.Page

    Private Sub _Default_Load(sender As Object, e As EventArgs) Handles Me.Load
        Try
            Dim NumberRandom = GetNumberRandom(1800)
            Dim createJsonFile = createJson(NumberRandom, 0)
            Dim NumberRandom_by_Total_5 = GetNumberRandom_by_Total(5, loadJson())
            Dim createJsonFile5 = createJson(NumberRandom_by_Total_5, 5)
            Dim NumberRandom_by_Total_30 = GetNumberRandom_by_Total(30, loadJson())
            Dim createJsonFile30 = createJson(NumberRandom_by_Total_30, 30)
        Catch ex As Exception
            Console.WriteLine(ex.Message)
        End Try
    End Sub

    Public Function GetNumberRandom(ByVal Number As Integer) As List(Of Decimal)
        Dim randoms As New List(Of Decimal)
        For i As Integer = 0 To Number - 1
            randoms.Add(GetRandom(0.00, 5.0))
            Thread.Sleep(1)
        Next
        Return randoms
    End Function

    Public Function GetRandom(ByVal Min As Decimal, ByVal Max As Decimal) As Decimal
        Dim Generator As System.Random = New System.Random()
        Return Generator.Next(Min, Max * 100) / 100
    End Function

    Public Function GetNumberRandom_by_Total(ByVal Number As Integer, ByVal NumberRandom As List(Of Decimal)) As List(Of Decimal)
        Try
            Dim temp As New List(Of Decimal)
            temp = NumberRandom
            Dim randoms_list As New List(Of Decimal)
            Dim countexit = temp.Count / Number
            Do
                Dim tempno As New Decimal
                tempno = 0
                For i As Integer = 0 To Number - 1
                    Dim rnd = New Random()
                    Dim randomNumberRandom = temp(rnd.Next(0, temp.Count))
                    tempno = tempno + randomNumberRandom
                    temp.Remove(randomNumberRandom)
                Next
                tempno = tempno / Number
                randoms_list.Add(tempno)
            Loop Until CInt(randoms_list.Count) = 60
            Return randoms_list
        Catch ex As Exception
            Console.WriteLine(ex.Message)
        End Try
    End Function

    Public Function createJson(ByVal dt As List(Of Decimal), Optional ByVal no As String = "") As String
        Try
            Dim valueList As New List(Of myValue)
            Dim valuedt(dt.Count - 1) As myValue
            Dim i = 0
            For Each t In dt
                valuedt(i) = New myValue
                valuedt(i).vRandom = t
                valueList.Add(valuedt(i))
                i = i + 1
            Next
            Dim str As New MemoryStream()
            Dim ser As New DataContractJsonSerializer(valueList.GetType())
            ser.WriteObject(str, valueList)
            str.Position = 0
            Dim sr As New StreamReader(str)
            saveJson(sr.ReadToEnd(), no)
            Return sr.ReadToEnd()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
        End Try
    End Function

    Public Sub saveJson(ByVal dt As String, Optional ByVal no As String = "")
        Try
            Dim file As System.IO.StreamWriter
            Dim path As String = AppDomain.CurrentDomain.BaseDirectory
            Dim fname = "\singleData" & no & ".txt"
            My.Computer.FileSystem.DeleteFile(path & fname)
            file = My.Computer.FileSystem.OpenTextFileWriter(path & fname, True)
            file.WriteLine(dt)
            file.Close()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
        End Try
    End Sub

    Public Function loadJson() As List(Of Decimal)
        Try
            Dim ret As New List(Of Decimal)
            Dim path As String = AppDomain.CurrentDomain.BaseDirectory
            Dim fname = path & "\singleData0.txt"
            Dim fileReader As System.IO.StreamReader
            fileReader = My.Computer.FileSystem.OpenTextFileReader(fname)
            Dim stringReader As String
            stringReader = fileReader.ReadToEnd()
            Dim jsObject = JArray.Parse(stringReader)
            For Each t In jsObject
                ret.Add(t.Item("vRandom"))
            Next
            Return ret
        Catch ex As Exception
            Console.WriteLine(ex.Message)
        End Try
    End Function

End Class

Public Class myValue
    Public Property vRandom() As String
        Get
            Return m_vRandom
        End Get
        Set(value As String)
            m_vRandom = value
        End Set
    End Property
    Private m_vRandom As String
End Class